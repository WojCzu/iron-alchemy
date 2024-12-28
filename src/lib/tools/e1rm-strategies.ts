import { RPE_TABLE } from "@/lib/tools/constants";

export type E1RMStrategy = (weight: number, reps: number, rpe?: number) => number;

export const e1rmStrategies = {
	epley: (weight: number, reps: number): number => {
		return weight * (1 + reps / 30);
	},

	brzycki: (weight: number, reps: number): number => {
		return weight * (36 / (37 - reps));
	},

	landers: (weight: number, reps: number): number => {
		return weight * (1 / (1.013 - 0.0267123 * reps));
	},

	rpeChart: (weight: number, reps: number, rpe: number): number => {
		if (rpe < 4 || rpe > 10 || (rpe * 10) % 5 !== 0) return 0;
		const rpeRow = RPE_TABLE[rpe as keyof typeof RPE_TABLE];
		if (!rpeRow) return 0;

		const percentage = rpeRow[reps - 1];
		if (!percentage) return 0;

		return weight / percentage;
	},
} as const;

export type E1RMMethod = keyof typeof e1rmStrategies;

export const RPE_METHODS = ["rpeChart"] as const satisfies E1RMMethod[];
