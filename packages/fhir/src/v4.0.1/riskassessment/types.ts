import type {
	Annotation,
	CodeableConcept,
	Element,
	Extension,
	Identifier,
	Meta,
	Period,
	Range,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */

export interface RiskAssessment<Contained = ResourceList> {
	resourceType: `RiskAssessment`
	/** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
	id?: string
	/** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
	meta?: Meta
	/** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
	implicitRules?: string

	_implicitRules?: Element
	/** The base language in which the resource is written. */
	language?: string

	_language?: Element
	/** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
	text?: Narrative
	contained?: Contained[]
	/** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Business identifier assigned to the risk assessment. */
	identifier?: Identifier[]
	/** A reference to the request that is fulfilled by this risk assessment. */
	basedOn?: Reference
	/** A reference to a resource that this risk assessment is part of, such as a Procedure. */
	parent?: Reference
	/** The status of the RiskAssessment, using the same statuses as an Observation. */
	status: string

	_status?: Element
	/** The algorithm, process or mechanism used to evaluate the risk. */
	method?: CodeableConcept
	/** The type of the risk assessment performed. */
	code?: CodeableConcept
	/** The patient or group the risk assessment applies to. */
	subject: Reference
	/** The encounter where the assessment was performed. */
	encounter?: Reference

	occurrenceDateTime?: string

	_occurrenceDateTime?: Element

	occurrencePeriod?: Period
	/** For assessments or prognosis specific to a particular condition, indicates the condition being assessed. */
	condition?: Reference
	/** The provider or software application that performed the assessment. */
	performer?: Reference
	/** The reason the risk assessment was performed. */
	reasonCode?: CodeableConcept[]
	/** Resources supporting the reason the risk assessment was performed. */
	reasonReference?: Reference[]
	/** Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.). */
	basis?: Reference[]

	prediction?: RiskAssessmentPrediction[]
	/** A description of the steps that might be taken to reduce the identified risk(s). */
	mitigation?: string

	_mitigation?: Element
	/** Additional comments about the risk assessment. */
	note?: Annotation[]
}

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */

export interface RiskAssessmentPrediction {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** One of the potential outcomes for the patient (e.g. remission, death,  a particular condition). */
	outcome?: CodeableConcept

	probabilityDecimal?: number

	_probabilityDecimal?: Element

	probabilityRange?: Range
	/** Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high). */
	qualitativeRisk?: CodeableConcept
	/** Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.). */
	relativeRisk?: number

	_relativeRisk?: Element

	whenPeriod?: Period

	whenRange?: Range
	/** Additional information explaining the basis for the prediction. */
	rationale?: string

	_rationale?: Element
}
