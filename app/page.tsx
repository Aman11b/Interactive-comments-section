import CommentList from "@/components/comments/CommentList";
import commentData from "../data/data.json";
export default function Home() {
  return (
    <main className=" min-h-screen px-4 py-8">
      <div className="mx-auto w-full max-w-3xl">
        <CommentList commentData={commentData} />
      </div>
    </main>
  );
}
