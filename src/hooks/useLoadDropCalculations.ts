import { type UseFormReturn } from "react-hook-form";
import { calculateLoadDrop } from "@/lib/tools/calculations";
import { type LoadDropFormValues } from "@/types/tools/load-drop";

export function useLoadDropCalculations(form: UseFormReturn<LoadDropFormValues>) {
	const {
		watch,
		formState: { isValid },
	} = form;
	const mainSet = watch("mainSet");
	const backoffSet = watch("backoffSet");

	if (!isValid) return { backoffWeight: undefined };
	const backoffWeight = calculateLoadDrop({
		mainWeight: mainSet.weight,
		mainReps: mainSet.reps,
		mainRpe: mainSet.rpe,
		backoffReps: backoffSet.reps,
		backoffRpe: backoffSet.rpe,
		backoffSets: backoffSet.sets,
	});

	return { backoffWeight };
}
