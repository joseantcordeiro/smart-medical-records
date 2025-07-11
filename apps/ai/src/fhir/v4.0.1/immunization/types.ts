import type {
	Annotation,
	CodeableConcept,
	Element,
	Extension,
	Identifier,
	Meta,
	Quantity,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */

export interface Immunization<Contained = ResourceList> {
	resourceType: `Immunization`
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
	/** A unique identifier assigned to this immunization record. */
	identifier?: Identifier[]
	/** Indicates the current status of the immunization event. */
	status: string

	_status?: Element
	/** Indicates the reason the immunization event was not performed. */
	statusReason?: CodeableConcept
	/** Vaccine that was administered or was to be administered. */
	vaccineCode: CodeableConcept
	/** The patient who either received or did not receive the immunization. */
	patient: Reference
	/** The visit or admission or other contact between patient and health care provider the immunization was performed as part of. */
	encounter?: Reference

	occurrenceDateTime?: string

	_occurrenceDateTime?: Element

	occurrenceString?: string

	_occurrenceString?: Element
	/** The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event. */
	recorded?: string

	_recorded?: Element
	/** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. */
	primarySource?: boolean

	_primarySource?: Element
	/** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
	reportOrigin?: CodeableConcept
	/** The service delivery location where the vaccine administration occurred. */
	location?: Reference
	/** Name of vaccine manufacturer. */
	manufacturer?: Reference
	/** Lot number of the  vaccine product. */
	lotNumber?: string

	_lotNumber?: Element
	/** Date vaccine batch expires. */
	expirationDate?: string

	_expirationDate?: Element
	/** Body site where vaccine was administered. */
	site?: CodeableConcept
	/** The path by which the vaccine product is taken into the body. */
	route?: CodeableConcept
	/** The quantity of vaccine product that was administered. */
	doseQuantity?: Quantity

	performer?: ImmunizationPerformer[]
	/** Extra information about the immunization that is not conveyed by the other attributes. */
	note?: Annotation[]
	/** Reasons why the vaccine was administered. */
	reasonCode?: CodeableConcept[]
	/** Condition, Observation or DiagnosticReport that supports why the immunization was administered. */
	reasonReference?: Reference[]
	/** Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent. */
	isSubpotent?: boolean

	_isSubpotent?: Element
	/** Reason why a dose is considered to be subpotent. */
	subpotentReason?: CodeableConcept[]

	education?: ImmunizationEducation[]
	/** Indicates a patient's eligibility for a funding program. */
	programEligibility?: CodeableConcept[]
	/** Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered). */
	fundingSource?: CodeableConcept

	reaction?: ImmunizationReaction[]

	protocolApplied?: ImmunizationProtocolApplied[]
}

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */

export interface ImmunizationPerformer {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Describes the type of performance (e.g. ordering provider, administering provider, etc.). */
	function?: CodeableConcept
	/** The practitioner or organization who performed the action. */
	actor: Reference
}

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */

export interface ImmunizationEducation {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Identifier of the material presented to the patient. */
	documentType?: string

	_documentType?: Element
	/** Reference pointer to the educational material given to the patient if the information was on line. */
	reference?: string

	_reference?: Element
	/** Date the educational material was published. */
	publicationDate?: string

	_publicationDate?: Element
	/** Date the educational material was given to the patient. */
	presentationDate?: string

	_presentationDate?: Element
}

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */

export interface ImmunizationReaction {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Date of reaction to the immunization. */
	date?: string

	_date?: Element
	/** Details of the reaction. */
	detail?: Reference
	/** Self-reported indicator. */
	reported?: boolean

	_reported?: Element
}

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */

export interface ImmunizationProtocolApplied {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string

	_series?: Element
	/** Indicates the authority who published the protocol (e.g. ACIP) that is being followed. */
	authority?: Reference
	/** The vaccine preventable disease the dose is being administered against. */
	targetDisease?: CodeableConcept[]

	doseNumberPositiveInt?: number

	_doseNumberPositiveInt?: Element

	doseNumberString?: string

	_doseNumberString?: Element

	seriesDosesPositiveInt?: number

	_seriesDosesPositiveInt?: Element

	seriesDosesString?: string

	_seriesDosesString?: Element
}

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */

export interface ImmunizationEvaluation<Contained = ResourceList> {
	resourceType: `ImmunizationEvaluation`
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
	/** A unique identifier assigned to this immunization evaluation record. */
	identifier?: Identifier[]
	/** Indicates the current status of the evaluation of the vaccination administration event. */
	status: string

	_status?: Element
	/** The individual for whom the evaluation is being done. */
	patient: Reference
	/** The date the evaluation of the vaccine administration event was performed. */
	date?: string

	_date?: Element
	/** Indicates the authority who published the protocol (e.g. ACIP). */
	authority?: Reference
	/** The vaccine preventable disease the dose is being evaluated against. */
	targetDisease: CodeableConcept
	/** The vaccine administration event being evaluated. */
	immunizationEvent: Reference
	/** Indicates if the dose is valid or not valid with respect to the published recommendations. */
	doseStatus: CodeableConcept
	/** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations. */
	doseStatusReason?: CodeableConcept[]
	/** Additional information about the evaluation. */
	description?: string

	_description?: Element
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string

	_series?: Element

	doseNumberPositiveInt?: number

	_doseNumberPositiveInt?: Element

	doseNumberString?: string

	_doseNumberString?: Element

	seriesDosesPositiveInt?: number

	_seriesDosesPositiveInt?: Element

	seriesDosesString?: string

	_seriesDosesString?: Element
}

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */

export interface ImmunizationRecommendation<Contained = ResourceList> {
	resourceType: `ImmunizationRecommendation`
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
	/** A unique identifier assigned to this particular recommendation record. */
	identifier?: Identifier[]
	/** The patient the recommendation(s) are for. */
	patient: Reference
	/** The date the immunization recommendation(s) were created. */
	date: string

	_date?: Element
	/** Indicates the authority who published the protocol (e.g. ACIP). */
	authority?: Reference

	recommendation: ImmunizationRecommendationRecommendation[]
}

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */

export interface ImmunizationRecommendationRecommendation {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Vaccine(s) or vaccine group that pertain to the recommendation. */
	vaccineCode?: CodeableConcept[]
	/** The targeted disease for the recommendation. */
	targetDisease?: CodeableConcept
	/** Vaccine(s) which should not be used to fulfill the recommendation. */
	contraindicatedVaccineCode?: CodeableConcept[]
	/** Indicates the patient status with respect to the path to immunity for the target disease. */
	forecastStatus: CodeableConcept
	/** The reason for the assigned forecast status. */
	forecastReason?: CodeableConcept[]

	dateCriterion?: ImmunizationRecommendationDateCriterion[]
	/** Contains the description about the protocol under which the vaccine was administered. */
	description?: string

	_description?: Element
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string

	_series?: Element

	doseNumberPositiveInt?: number

	_doseNumberPositiveInt?: Element

	doseNumberString?: string

	_doseNumberString?: Element

	seriesDosesPositiveInt?: number

	_seriesDosesPositiveInt?: Element

	seriesDosesString?: string

	_seriesDosesString?: Element
	/** Immunization event history and/or evaluation that supports the status and recommendation. */
	supportingImmunization?: Reference[]
	/** Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information. */
	supportingPatientInformation?: Reference[]
}

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */

export interface ImmunizationRecommendationDateCriterion {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	code: CodeableConcept

	value?: string

	_value?: Element
}
