import { auth } from "@/libs/firebase-admin";

interface UserStats {
  currentCount: number;
  previousCount: number;
  percentageChange: number;
}

export async function getUserStats(): Promise<UserStats> {
  try {
    const { users } = await auth.listUsers();
    const now = new Date();
    const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayLastMonth = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      1
    );

    const currentCount = users.filter(
      (user) => new Date(user.metadata.creationTime) >= firstDayThisMonth
    ).length;

    const previousCount = users.filter(
      (user) =>
        new Date(user.metadata.creationTime) >= firstDayLastMonth &&
        new Date(user.metadata.creationTime) < firstDayThisMonth
    ).length;

    const percentageChange =
      previousCount === 0
        ? 100
        : ((currentCount - previousCount) / previousCount) * 100;

    return {
      currentCount: users.length,
      previousCount,
      percentageChange,
    };
  } catch (error) {
    console.error("Error getting user stats:", error);
    return {
      currentCount: 0,
      previousCount: 0,
      percentageChange: 0,
    };
  }
}
