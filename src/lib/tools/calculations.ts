import { FEMALE_DOTS_COEFFICIENTS, MALE_DOTS_COEFFICIENTS } from "@/lib/tools/constants";
import { e1rmStrategies, type E1RMMethod } from "@/lib/tools/e1rm-strategies";

type CalculateE1RMParams = {
	weight: number;
	reps: number;
	rpe?: number;
	round?: number;
	method?: E1RMMethod;
};

export const calculateE1RM = ({
	weight,
	reps,
	rpe = 10,
	round,
	method = "rpeChart",
}: CalculateE1RMParams): number => {
	if (!Number.isInteger(reps) || reps < 1 || reps > 12) return 0;
	if (reps === 1 && rpe === 10) return weight;

	const strategy = e1rmStrategies[method];
	const result = strategy(weight, reps, rpe);
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

type CalculateDotsParams = {
	gender: "male" | "female";
	units: "kg" | "lbs";
	bodyWeight: number;
	liftedWeight: number;
};

export const calculateDots = ({
	gender,
	units,
	bodyWeight,
	liftedWeight,
}: CalculateDotsParams): number => {
	const bodyWeightKg = units === "kg" ? bodyWeight : bodyWeight * 0.45359237;
	const liftedWeightKg = units === "kg" ? liftedWeight : liftedWeight * 0.45359237;
	const dotsCoefficients = gender === "male" ? MALE_DOTS_COEFFICIENTS : FEMALE_DOTS_COEFFICIENTS;

	const denominator =
		dotsCoefficients.A * Math.pow(bodyWeightKg, 4) +
		dotsCoefficients.B * Math.pow(bodyWeightKg, 3) +
		dotsCoefficients.C * Math.pow(bodyWeightKg, 2) +
		dotsCoefficients.D * bodyWeightKg +
		dotsCoefficients.E;

	const dotsPoints = (liftedWeightKg * 500) / denominator;

	return Math.round(dotsPoints * 100) / 100;
};
