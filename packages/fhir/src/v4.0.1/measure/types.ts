import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  ContactDetail,
  UsageContext,
  Period,
  RelatedArtifact,
  Expression,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/* Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */

export interface Measure<Contained = ResourceList> {
  resourceType: `Measure`;
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
  /** An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this measure is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the measure is stored on different servers. */
  url?: string;

  _url?: Element;
  /** A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Identifier[];
  /** The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
  version?: string;

  _version?: Element;
  /** A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;

  _name?: Element;
  /** A short, descriptive, user-friendly title for the measure. */
  title?: string;

  _title?: Element;
  /** An explanatory or alternate title for the measure giving additional information about its content. */
  subtitle?: string;

  _subtitle?: Element;
  /** The status of this measure. Enables tracking the life-cycle of the content. */
  status: "draft" | "active" | "retired" | "unknown";

  _status?: Element;
  /** A Boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;

  _experimental?: Element;

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;
  /** The date  (and optionally time) when the measure was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes. */
  date?: string;

  _date?: Element;
  /** The name of the organization or individual that published the measure. */
  publisher?: string;

  _publisher?: Element;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: ContactDetail[];
  /** A free text natural language description of the measure from a consumer's perspective. */
  description?: string;

  _description?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate measure instances. */
  useContext?: UsageContext[];
  /** A legal or geographic region in which the measure is intended to be used. */
  jurisdiction?: CodeableConcept[];
  /** Explanation of why this measure is needed and why it has been designed as it has. */
  purpose?: string;

  _purpose?: Element;
  /** A detailed description, from a clinical perspective, of how the measure is used. */
  usage?: string;

  _usage?: Element;
  /** A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure. */
  copyright?: string;

  _copyright?: Element;
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;

  _approvalDate?: Element;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;

  _lastReviewDate?: Element;
  /** The period during which the measure content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching. */
  topic?: CodeableConcept[];
  /** An individiual or organization primarily involved in the creation and maintenance of the content. */
  author?: ContactDetail[];
  /** An individual or organization primarily responsible for internal coherence of the content. */
  editor?: ContactDetail[];
  /** An individual or organization primarily responsible for review of some aspect of the content. */
  reviewer?: ContactDetail[];
  /** An individual or organization responsible for officially endorsing the content for use in some setting. */
  endorser?: ContactDetail[];
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  relatedArtifact?: RelatedArtifact[];
  /** A reference to a Library resource containing the formal logic used by the measure. */
  library?: string[];
  /** Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure. */
  disclaimer?: string;

  _disclaimer?: Element;
  /** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. */
  scoring?: CodeableConcept;
  /** If this is a composite measure, the scoring method used to combine the component measures to determine the composite score. */
  compositeScoring?: CodeableConcept;
  /** Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization. */
  type?: CodeableConcept[];
  /** A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results. */
  riskAdjustment?: string;

  _riskAdjustment?: Element;
  /** Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result. */
  rateAggregation?: string;

  _rateAggregation?: Element;
  /** Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence. */
  rationale?: string;

  _rationale?: Element;
  /** Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure. */
  clinicalRecommendationStatement?: string;

  _clinicalRecommendationStatement?: Element;
  /** Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range). */
  improvementNotation?: CodeableConcept;
  /** Provides a description of an individual term used within the measure. */
  definition?: string[];

  _definition?: Element[];
  /** Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure. */
  guidance?: string;

  _guidance?: Element;

  group?: MeasureGroup[];

  supplementalData?: MeasureSupplementalData[];
}

/** The Measure resource provides the definition of a quality measure. */

export interface MeasureGroup {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures. */
  code?: CodeableConcept;
  /** The human readable description of this population group. */
  description?: string;

  _description?: Element;

  population?: MeasurePopulation[];

  stratifier?: MeasureStratifier[];
}

/** The Measure resource provides the definition of a quality measure. */

export interface MeasurePopulation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria: Expression;
}

/** The Measure resource provides the definition of a quality measure. */

export interface MeasureStratifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria?: Expression;

  component?: MeasureComponent[];
}

/** The Measure resource provides the definition of a quality measure. */

export interface MeasureComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria: Expression;
}

/** The Measure resource provides the definition of a quality measure. */

export interface MeasureSupplementalData {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates a meaning for the supplemental data. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing supplemental data to be correlated across measures. */
  code?: CodeableConcept;
  /** An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation. */
  usage?: CodeableConcept[];
  /** The human readable description of this supplemental data. */
  description?: string;

  _description?: Element;
  /** The criteria for the supplemental data. This is typically the name of a valid expression defined within a referenced library, but it may also be a path to a specific data element. The criteria defines the data to be returned for this element. */
  criteria: Expression;
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReport<Contained = ResourceList> {
  resourceType: `MeasureReport`;
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
  /** A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance. */
  identifier?: Identifier[];
  /** The MeasureReport status. No data will be available until the MeasureReport status is complete. */
  status: "complete" | "pending" | "error";

  _status?: Element;
  /** The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure. */
  type: "individual" | "subject-list" | "summary" | "data-collection";

  _type?: Element;
  /** A reference to the Measure that was calculated to produce this report. */
  measure: string;
  /** Optional subject identifying the individual or individuals the report is for. */
  subject?: Reference;
  /** The date this measure report was generated. */
  date?: string;

  _date?: Element;
  /** The individual, location, or organization that is reporting the data. */
  reporter?: Reference;
  /** The reporting period for which the report was calculated. */
  period: Period;
  /** Whether improvement in the measure is noted by an increase or decrease in the measure score. */
  improvementNotation?: CodeableConcept;

  group?: MeasureReportGroup[];
  /** A reference to a Bundle containing the Resources that were used in the calculation of this measure. */
  evaluatedResource?: Reference[];
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportGroup {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The meaning of the population group as defined in the measure definition. */
  code?: CodeableConcept;

  population?: MeasureReportPopulation[];
  /** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
  measureScore?: Quantity;

  stratifier?: MeasureReportStratifier[];
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportPopulation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  count?: number;

  _count?: Element;

  subjectResults?: Reference;
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportStratifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept[];

  stratum?: MeasureReportStratum[];
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportStratum {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  value?: CodeableConcept;

  component?: MeasureReportComponent[];

  population?: MeasureReportPopulation1[];

  measureScore?: Quantity;
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  value: CodeableConcept;
}

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */

export interface MeasureReportPopulation1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  count?: number;

  _count?: Element;

  subjectResults?: Reference;
}
