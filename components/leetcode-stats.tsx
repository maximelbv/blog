import { LeetCode } from "leetcode-query";

interface ISubmissionsCounts {
  easy: number | null;
  medium: number | null;
  hard: number | null;
  all: number | null;
}

const fetchLeetcodeStats = async () => {
  const leetcode = new LeetCode();
  const user = await leetcode.user("maximelbv");
  if (user.matchedUser) {
    const stats = user.matchedUser.submitStats.acSubmissionNum;
    return {
      all: stats.find((item) => item.difficulty === "All")?.count || 0,
      easy: stats.find((item) => item.difficulty === "Easy")?.count || 0,
      medium: stats.find((item) => item.difficulty === "Medium")?.count || 0,
      hard: stats.find((item) => item.difficulty === "Hard")?.count || 0,
    };
  }
  return { all: null, easy: null, medium: null, hard: null };
};

const LeetcodeStats = async () => {
  const submissionsCounts: ISubmissionsCounts = await fetchLeetcodeStats();

  return (
    <div className="h-full p-[15px] flex flex-col">
      <span className="h-full flex flex-col text-muted-foreground text-[18px]">
        Leetcode Stats
      </span>
      <div className="text-[24px]">
        <span className="text-foreground">
          {submissionsCounts.all ?? "NaN"}
        </span>
        <span className="text-muted-foreground"> problems solved</span>
      </div>
      <div className="grid grid-cols-3 gap-[10px] justify-self-end">
        <div className="py-[2px] flex flex-col items-center justify-center rounded-md text-green-500">
          <span className="text-[20px]">{submissionsCounts.easy ?? "NaN"}</span>
          <span> Easy</span>
        </div>
        <div className="py-[2px] flex flex-col items-center justify-center rounded-md text-amber-500">
          <span className="text-[20px]">
            {submissionsCounts.medium ?? "NaN"}
          </span>
          <span> Medium</span>
        </div>
        <div className="py-[2px] flex flex-col items-center justify-center rounded-md text-red-500">
          <span className="text-[20px]">{submissionsCounts.hard ?? "NaN"}</span>
          <span> Hard</span>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeStats;
