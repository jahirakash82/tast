import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText, AlertCircle } from 'lucide-react';

interface Post {
  id: number;
  content: string;
  isLoading?: boolean;
  hasError?: boolean;
}

const PostTimeline = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [maxPostsChecked, setMaxPostsChecked] = useState(0);

  const fetchPost = async (postNumber: number): Promise<Post | null> => {
    try {
      const response = await fetch(`/POST/${postNumber}.html`);
      if (response.ok) {
        const content = await response.text();
        return { id: postNumber, content };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching post ${postNumber}:`, error);
      return { id: postNumber, content: '', hasError: true };
    }
  };

  const loadPosts = async () => {
    const loadedPosts: Post[] = [];
    let postNumber = 1;
    let consecutiveFailures = 0;
    const maxConsecutiveFailures = 3; // Stop after 3 consecutive failures

    while (consecutiveFailures < maxConsecutiveFailures) {
      const post = await fetchPost(postNumber);
      
      if (post && !post.hasError && post.content.trim()) {
        loadedPosts.push(post);
        consecutiveFailures = 0; // Reset failure count
      } else {
        consecutiveFailures++;
      }
      
      postNumber++;
      setMaxPostsChecked(postNumber - 1);
    }

    setPosts(loadedPosts);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const PostCard = ({ post, index }: { post: Post; index: number }) => (
    <div 
      className="relative animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Timeline connector */}
      {index > 0 && (
        <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-border transform -translate-x-1/2 -translate-y-6" />
      )}
      
      <Card className="timeline-post bg-gradient-post border-border/50 overflow-hidden">
        <div className="p-6">
          {/* Post header with number */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/30">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {post.id}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Post {post.id}</span>
            </div>
          </div>
          
          {/* Post content */}
          <div 
            className="post-content prose prose-sm max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Card>
    </div>
  );

  const LoadingSkeleton = ({ index }: { index: number }) => (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="timeline-post bg-gradient-post border-border/50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </Card>
    </div>
  );

  return (
    <div className="bg-background">
      {/* Posts Timeline */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {loading ? (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full" />
                <span>পোস্ট লোড হচ্ছে...</span>
              </div>
            </div>
            {[...Array(3)].map((_, i) => (
              <LoadingSkeleton key={i} index={i} />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                সর্বশেষ পোস্টসমূহ
              </h2>
              <p className="text-muted-foreground">
                {posts.length} টি পোস্ট পাওয়া গেছে
              </p>
            </div>
            
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">কোন পোস্ট পাওয়া যায়নি</h3>
              <p className="text-muted-foreground mb-6">
                POST ফোল্ডারে 1.html, 2.html ইত্যাদি নামে HTML ফাইল যোগ করুন
              </p>
              <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
                <strong>কিভাবে পোস্ট যোগ করবেন:</strong>
                <br />
                1. public/POST ফোল্ডার তৈরি করুন
                <br />
                2. 1.html, 2.html, 3.html... নামে ফাইল যোগ করুন
                <br />
                3. পেইজ রিফ্রেশ করুন
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostTimeline;