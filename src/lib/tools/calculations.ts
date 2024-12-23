import { RPE_TABLE } from "@/lib/tools/constants";

type CalculateE1RMParams = {
	weight: number;
	reps: number;
	rpe?: number;
	round?: number;
};

export const calculateE1RM = ({ weight, reps, rpe = 10, round }: CalculateE1RMParams): number => {
	if (reps === 1 && rpe === 10) return weight;

	const rpeRow = RPE_TABLE[rpe as keyof typeof RPE_TABLE];
	if (!rpeRow) return 0;

	const percentage = rpeRow[reps - 1];
	if (!percentage) return 0;

	const result = weight / percentage;
	return round ? Math.round(Math.floor(result / round) * round * 100) / 100 : result;
};

type CalculateLoadDropParams = {
	mainWeight: number;
	mainReps: number;
	mainRpe: number;
	backoffReps: number;
	backoffRpe: number;
	backoffSets: number;
	round?: number;
};

export const calculateLoadDrop = ({
	mainWeight,
	mainReps,
	mainRpe,
	backoffReps,
	backoffRpe,
	backoffSets,
	round = 2.5,
}: CalculateLoadDropParams): number => {
	const estimatedE1RM = calculateE1RM({ weight: mainWeight, reps: mainReps, rpe: mainRpe });
	const mainRir = 10 - mainRpe;
	const backoffRir = 10 - backoffRpe;

	const repsInit = 1 - 0.031 * (mainReps + mainRir - 1);
	const repsDiff = 1 - 0.027 * (backoffReps - mainReps + backoffRir - mainRir);
	const setsModifier = 1 - 0.027 * (backoffSets - 1);

	const result = estimatedE1RM * repsInit * repsDiff * setsModifier;

	return Math.round(Math.floor(result / round) * round * 100) / 100;
};
