import { useTranslations } from "next-intl";
import { type z } from "zod";

export type SchemaConfig<T extends z.ZodType> = {
	creator: (t: (key: string) => string) => T;
	namespace: string;
};

export function useTranslatedSchema<T extends z.ZodType>(config: SchemaConfig<T>): T {
	const t = useTranslations(config.namespace);
	return config.creator(t);
}
