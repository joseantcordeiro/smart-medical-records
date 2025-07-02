import { z } from "zod/v4";
import * as types from "./types";
import * as primitives from "../primitives";
import { getCachedSchema, ZodNever } from "../schema-cache";
import {
  createMetaSchema,
  createElementSchema,
  createExtensionSchema,
  createIdentifierSchema,
  createCodeableConceptSchema,
  createReferenceSchema,
  createContactDetailSchema,
  createUsageContextSchema,
  createPeriodSchema,
  createRelatedArtifactSchema,
  createTimingSchema,
  createAgeSchema,
  createRangeSchema,
  createDurationSchema,
  createQuantitySchema,
  createDosageSchema,
  createExpressionSchema,
} from "../core/schema";
import { createNarrativeSchema } from "../narrative/schema";
import { createResourceListSchema } from "../resourcelist/schema";

/* Generated from FHIR JSON Schema */

export function createActivityDefinitionSchema<
  C extends z.ZodTypeAny = z.ZodUnknown,
>(options?: { contained?: C; allowContained?: boolean }) {
  const contained =
    options?.allowContained === false
      ? ZodNever
      : (options?.contained ?? createResourceListSchema());

  return getCachedSchema("ActivityDefinition", [contained], () => {
    const baseSchema: z.ZodType<types.ActivityDefinition<z.infer<C>>> =
      z.strictObject({
        resourceType: z.literal("ActivityDefinition"),
        id: primitives.getIdSchema().optional(),
        meta: createMetaSchema().optional(),
        implicitRules: primitives.getUriSchema().optional(),
        _implicitRules: createElementSchema().optional(),
        language: primitives.getCodeSchema().optional(),
        _language: createElementSchema().optional(),
        text: createNarrativeSchema().optional(),
        contained: z.array(contained).optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        url: primitives.getUriSchema().optional(),
        _url: createElementSchema().optional(),
        identifier: z.array(createIdentifierSchema()).optional(),
        version: primitives.getStringSchema().optional(),
        _version: createElementSchema().optional(),
        name: primitives.getStringSchema().optional(),
        _name: createElementSchema().optional(),
        title: primitives.getStringSchema().optional(),
        _title: createElementSchema().optional(),
        subtitle: primitives.getStringSchema().optional(),
        _subtitle: createElementSchema().optional(),
        status: z.enum(["draft", "active", "retired", "unknown"]),
        _status: createElementSchema().optional(),
        experimental: primitives.getBooleanSchema().optional(),
        _experimental: createElementSchema().optional(),
        subjectCodeableConcept: createCodeableConceptSchema().optional(),
        subjectReference: createReferenceSchema().optional(),
        date: primitives.getDateTimeSchema().optional(),
        _date: createElementSchema().optional(),
        publisher: primitives.getStringSchema().optional(),
        _publisher: createElementSchema().optional(),
        contact: z.array(createContactDetailSchema()).optional(),
        description: primitives.getMarkdownSchema().optional(),
        _description: createElementSchema().optional(),
        useContext: z.array(createUsageContextSchema()).optional(),
        jurisdiction: z.array(createCodeableConceptSchema()).optional(),
        purpose: primitives.getMarkdownSchema().optional(),
        _purpose: createElementSchema().optional(),
        usage: primitives.getStringSchema().optional(),
        _usage: createElementSchema().optional(),
        copyright: primitives.getMarkdownSchema().optional(),
        _copyright: createElementSchema().optional(),
        approvalDate: primitives.getDateSchema().optional(),
        _approvalDate: createElementSchema().optional(),
        lastReviewDate: primitives.getDateSchema().optional(),
        _lastReviewDate: createElementSchema().optional(),
        effectivePeriod: createPeriodSchema().optional(),
        topic: z.array(createCodeableConceptSchema()).optional(),
        author: z.array(createContactDetailSchema()).optional(),
        editor: z.array(createContactDetailSchema()).optional(),
        reviewer: z.array(createContactDetailSchema()).optional(),
        endorser: z.array(createContactDetailSchema()).optional(),
        relatedArtifact: z.array(createRelatedArtifactSchema()).optional(),
        library: z.array(primitives.getCanonicalSchema()).optional(),
        kind: primitives.getCodeSchema().optional(),
        _kind: createElementSchema().optional(),
        profile: primitives.getCanonicalSchema().optional(),
        code: createCodeableConceptSchema().optional(),
        intent: primitives.getCodeSchema().optional(),
        _intent: createElementSchema().optional(),
        priority: primitives.getCodeSchema().optional(),
        _priority: createElementSchema().optional(),
        doNotPerform: primitives.getBooleanSchema().optional(),
        _doNotPerform: createElementSchema().optional(),
        timingTiming: createTimingSchema().optional(),
        timingDateTime: z.string().optional(),
        _timingDateTime: createElementSchema().optional(),
        timingAge: createAgeSchema().optional(),
        timingPeriod: createPeriodSchema().optional(),
        timingRange: createRangeSchema().optional(),
        timingDuration: createDurationSchema().optional(),
        location: createReferenceSchema().optional(),
        participant: z
          .array(createActivityDefinitionParticipantSchema())
          .optional(),
        productReference: createReferenceSchema().optional(),
        productCodeableConcept: createCodeableConceptSchema().optional(),
        quantity: createQuantitySchema().optional(),
        dosage: z.array(createDosageSchema()).optional(),
        bodySite: z.array(createCodeableConceptSchema()).optional(),
        specimenRequirement: z.array(createReferenceSchema()).optional(),
        observationRequirement: z.array(createReferenceSchema()).optional(),
        observationResultRequirement: z
          .array(createReferenceSchema())
          .optional(),
        transform: primitives.getCanonicalSchema().optional(),
        dynamicValue: z
          .array(createActivityDefinitionDynamicValueSchema())
          .optional(),
      });

    return baseSchema;
  });
}

export function createActivityDefinitionParticipantSchema() {
  return getCachedSchema("ActivityDefinitionParticipant", [], () => {
    const baseSchema: z.ZodType<types.ActivityDefinitionParticipant> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        type: primitives.getCodeSchema(),
        _type: createElementSchema().optional(),
        role: createCodeableConceptSchema().optional(),
      });

    return baseSchema;
  });
}

export function createActivityDefinitionDynamicValueSchema() {
  return getCachedSchema("ActivityDefinitionDynamicValue", [], () => {
    const baseSchema: z.ZodType<types.ActivityDefinitionDynamicValue> =
      z.strictObject({
        id: primitives.getStringSchema().optional(),
        extension: z.array(createExtensionSchema()).optional(),
        modifierExtension: z.array(createExtensionSchema()).optional(),
        path: primitives.getStringSchema(),
        _path: createElementSchema().optional(),
        expression: createExpressionSchema(),
      });

    return baseSchema;
  });
}
