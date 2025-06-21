import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Annotation,
  Address,
  Age,
  Attachment,
  Coding,
  ContactPoint,
  Count,
  Distance,
  Duration,
  HumanName,
  Money,
  Quantity,
  Range,
  Ratio,
  SampledData,
  Signature,
  Timing,
  ContactDetail,
  Contributor,
  DataRequirement,
  Expression,
  ParameterDefinition,
  RelatedArtifact,
  TriggerDefinition,
  UsageContext,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/* Generated from FHIR JSON Schema */

/** A task to be performed. */

export interface Task<Contained = ResourceList> {
  resourceType: `Task`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The business identifier for this task. */
  identifier?: Identifier[];
  /** The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
  instantiatesCanonical?: string;
  /** The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
  instantiatesUri?: string;

  _instantiatesUri?: Element;
  /** BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient. */
  basedOn?: Reference[];
  /** An identifier that links together multiple tasks and other requests that were created in the same context. */
  groupIdentifier?: Identifier;
  /** Task that this particular task is part of. */
  partOf?: Reference[];
  /** The current status of the task. */
  status:
    | "draft"
    | "requested"
    | "received"
    | "accepted"
    | "rejected"
    | "ready"
    | "cancelled"
    | "in-progress"
    | "on-hold"
    | "failed"
    | "completed"
    | "entered-in-error";

  _status?: Element;
  /** An explanation as to why this task is held, failed, was refused, etc. */
  statusReason?: CodeableConcept;
  /** Contains business-specific nuances of the business state. */
  businessStatus?: CodeableConcept;
  /** Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc. */
  intent:
    | "unknown"
    | "proposal"
    | "plan"
    | "order"
    | "original-order"
    | "reflex-order"
    | "filler-order"
    | "instance-order"
    | "option";

  _intent?: Element;
  /** Indicates how quickly the Task should be addressed with respect to other requests. */
  priority?: string;

  _priority?: Element;
  /** A name or code (or both) briefly describing what the task involves. */
  code?: CodeableConcept;
  /** A free-text description of what is to be performed. */
  description?: string;

  _description?: Element;
  /** The request being actioned or the resource being manipulated by this task. */
  focus?: Reference;
  /** The entity who benefits from the performance of the service specified in the task (e.g., the patient). */
  for?: Reference;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created. */
  encounter?: Reference;
  /** Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end). */
  executionPeriod?: Period;
  /** The date and time this task was created. */
  authoredOn?: string;

  _authoredOn?: Element;
  /** The date and time of last modification to this task. */
  lastModified?: string;

  _lastModified?: Element;
  /** The creator of the task. */
  requester?: Reference;
  /** The kind of participant that should perform the task. */
  performerType?: CodeableConcept[];
  /** Individual organization or Device currently responsible for task execution. */
  owner?: Reference;
  /** Principal physical location where the this task is performed. */
  location?: Reference;
  /** A description or code indicating why this task needs to be performed. */
  reasonCode?: CodeableConcept;
  /** A resource reference indicating why this task needs to be performed. */
  reasonReference?: Reference;
  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task. */
  insurance?: Reference[];
  /** Free-text information captured about the task as it progresses. */
  note?: Annotation[];
  /** Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task. */
  relevantHistory?: Reference[];

  restriction?: TaskRestriction;

  input?: TaskInput[];

  output?: TaskOutput[];
}

/** A task to be performed. */

export interface TaskRestriction {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates the number of times the requested action should occur. */
  repetitions?: number;

  _repetitions?: Element;
  /** Over what time-period is fulfillment sought. */
  period?: Period;
  /** For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought? */
  recipient?: Reference[];
}

/** A task to be performed. */

export interface TaskInput {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A code or description indicating how the input is intended to be used as part of the task execution. */
  type: CodeableConcept;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueCanonical?: string;

  _valueCanonical?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueId?: string;

  _valueId?: Element;

  valueInstant?: string;

  _valueInstant?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueMarkdown?: string;

  _valueMarkdown?: Element;

  valueOid?: string;

  _valueOid?: Element;

  valuePositiveInt?: number;

  _valuePositiveInt?: Element;

  valueString?: string;

  _valueString?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueUnsignedInt?: number;

  _valueUnsignedInt?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueUrl?: string;

  _valueUrl?: Element;

  valueUuid?: string;

  _valueUuid?: Element;

  valueAddress?: Address;

  valueAge?: Age;

  valueAnnotation?: Annotation;

  valueAttachment?: Attachment;

  valueCodeableConcept?: CodeableConcept;

  valueCoding?: Coding;

  valueContactPoint?: ContactPoint;

  valueCount?: Count;

  valueDistance?: Distance;

  valueDuration?: Duration;

  valueHumanName?: HumanName;

  valueIdentifier?: Identifier;

  valueMoney?: Money;

  valuePeriod?: Period;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueReference?: Reference;

  valueSampledData?: SampledData;

  valueSignature?: Signature;

  valueTiming?: Timing;

  valueContactDetail?: ContactDetail;

  valueContributor?: Contributor;

  valueDataRequirement?: DataRequirement;

  valueExpression?: Expression;

  valueParameterDefinition?: ParameterDefinition;

  valueRelatedArtifact?: RelatedArtifact;

  valueTriggerDefinition?: TriggerDefinition;

  valueUsageContext?: UsageContext;

  valueDosage?: Dosage;

  valueMeta?: Meta;
}

/** A task to be performed. */

export interface TaskOutput {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The name of the Output parameter. */
  type: CodeableConcept;

  valueBase64Binary?: string;

  _valueBase64Binary?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueCanonical?: string;

  _valueCanonical?: Element;

  valueCode?: string;

  _valueCode?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueId?: string;

  _valueId?: Element;

  valueInstant?: string;

  _valueInstant?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueMarkdown?: string;

  _valueMarkdown?: Element;

  valueOid?: string;

  _valueOid?: Element;

  valuePositiveInt?: number;

  _valuePositiveInt?: Element;

  valueString?: string;

  _valueString?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueUnsignedInt?: number;

  _valueUnsignedInt?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueUrl?: string;

  _valueUrl?: Element;

  valueUuid?: string;

  _valueUuid?: Element;

  valueAddress?: Address;

  valueAge?: Age;

  valueAnnotation?: Annotation;

  valueAttachment?: Attachment;

  valueCodeableConcept?: CodeableConcept;

  valueCoding?: Coding;

  valueContactPoint?: ContactPoint;

  valueCount?: Count;

  valueDistance?: Distance;

  valueDuration?: Duration;

  valueHumanName?: HumanName;

  valueIdentifier?: Identifier;

  valueMoney?: Money;

  valuePeriod?: Period;

  valueQuantity?: Quantity;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueReference?: Reference;

  valueSampledData?: SampledData;

  valueSignature?: Signature;

  valueTiming?: Timing;

  valueContactDetail?: ContactDetail;

  valueContributor?: Contributor;

  valueDataRequirement?: DataRequirement;

  valueExpression?: Expression;

  valueParameterDefinition?: ParameterDefinition;

  valueRelatedArtifact?: RelatedArtifact;

  valueTriggerDefinition?: TriggerDefinition;

  valueUsageContext?: UsageContext;

  valueDosage?: Dosage;

  valueMeta?: Meta;
}
