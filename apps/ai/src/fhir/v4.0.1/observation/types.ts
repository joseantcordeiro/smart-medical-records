import type {
	Annotation,
	CodeableConcept,
	Element,
	Extension,
	Identifier,
	Meta,
	Period,
	Quantity,
	Range,
	Ratio,
	Reference,
	SampledData,
	Timing,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */

export interface Observation<Contained = ResourceList> {
	resourceType: `Observation`
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
	/** A unique identifier assigned to this observation. */
	identifier?: Identifier[]
	/** A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed. */
	basedOn?: Reference[]
	/** A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure. */
	partOf?: Reference[]
	/** The status of the result value. */
	status:
		| 'registered'
		| 'preliminary'
		| 'final'
		| 'amended'
		| 'corrected'
		| 'cancelled'
		| 'entered-in-error'
		| 'unknown'

	_status?: Element
	/** A code that classifies the general type of observation being made. */
	category?: CodeableConcept[]
	/** Describes what was observed. Sometimes this is called the observation "name". */
	code: CodeableConcept
	/** The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation. */
	subject?: Reference
	/** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus. */
	focus?: Reference[]
	/** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made. */
	encounter?: Reference

	effectiveDateTime?: string

	_effectiveDateTime?: Element

	effectivePeriod?: Period

	effectiveTiming?: Timing

	effectiveInstant?: string

	_effectiveInstant?: Element
	/** The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified. */
	issued?: string

	_issued?: Element
	/** Who was responsible for asserting the observed value as "true". */
	performer?: Reference[]

	valueQuantity?: Quantity

	valueCodeableConcept?: CodeableConcept

	valueString?: string

	_valueString?: Element

	valueBoolean?: boolean

	_valueBoolean?: Element

	valueInteger?: number

	_valueInteger?: Element

	valueRange?: Range

	valueRatio?: Ratio

	valueSampledData?: SampledData

	valueTime?: string

	_valueTime?: Element

	valueDateTime?: string

	_valueDateTime?: Element

	valuePeriod?: Period
	/** Provides a reason why the expected value in the element Observation.value[x] is missing. */
	dataAbsentReason?: CodeableConcept
	/** A categorical assessment of an observation value.  For example, high, low, normal. */
	interpretation?: CodeableConcept[]
	/** Comments about the observation or the results. */
	note?: Annotation[]
	/** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
	bodySite?: CodeableConcept
	/** Indicates the mechanism used to perform the observation. */
	method?: CodeableConcept
	/** The specimen that was used when this observation was made. */
	specimen?: Reference
	/** The device used to generate the observation data. */
	device?: Reference

	referenceRange?: ObservationReferenceRange[]
	/** This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group. */
	hasMember?: Reference[]
	/** The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image. */
	derivedFrom?: Reference[]

	component?: ObservationComponent[]
}

/** Measurements and simple assertions made about a patient, device or other subject. */

export interface ObservationReferenceRange {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3). */
	low?: Quantity
	/** The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3). */
	high?: Quantity
	/** Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range. */
	type?: CodeableConcept
	/** Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.  Multiple `appliesTo`  are interpreted as an "AND" of the target populations.  For example, to represent a target population of African American females, both a code of female and a code for African American would be used. */
	appliesTo?: CodeableConcept[]
	/** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so. */
	age?: Range
	/** Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals". */
	text?: string

	_text?: Element
}

/** Measurements and simple assertions made about a patient, device or other subject. */

export interface ObservationComponent {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Describes what was observed. Sometimes this is called the observation "code". */
	code: CodeableConcept

	valueQuantity?: Quantity

	valueCodeableConcept?: CodeableConcept

	valueString?: string

	_valueString?: Element

	valueBoolean?: boolean

	_valueBoolean?: Element

	valueInteger?: number

	_valueInteger?: Element

	valueRange?: Range

	valueRatio?: Ratio

	valueSampledData?: SampledData

	valueTime?: string

	_valueTime?: Element

	valueDateTime?: string

	_valueDateTime?: Element

	valuePeriod?: Period
	/** Provides a reason why the expected value in the element Observation.component.value[x] is missing. */
	dataAbsentReason?: CodeableConcept
	/** A categorical assessment of an observation value.  For example, high, low, normal. */
	interpretation?: CodeableConcept[]

	referenceRange?: ObservationReferenceRange[]
}

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */

export interface ObservationDefinition<Contained = ResourceList> {
	resourceType: `ObservationDefinition`
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
	/** A code that classifies the general type of observation. */
	category?: CodeableConcept[]
	/** Describes what will be observed. Sometimes this is called the observation "name". */
	code: CodeableConcept
	/** A unique identifier assigned to this ObservationDefinition artifact. */
	identifier?: Identifier[]
	/** The data types allowed for the value element of the instance observations conforming to this ObservationDefinition. */
	permittedDataType?: (
		| 'Quantity'
		| 'CodeableConcept'
		| 'string'
		| 'boolean'
		| 'integer'
		| 'Range'
		| 'Ratio'
		| 'SampledData'
		| 'time'
		| 'dateTime'
		| 'Period'
	)[]

	_permittedDataType?: Element[]
	/** Multiple results allowed for observations conforming to this ObservationDefinition. */
	multipleResultsAllowed?: boolean

	_multipleResultsAllowed?: Element
	/** The method or technique used to perform the observation. */
	method?: CodeableConcept
	/** The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition. */
	preferredReportName?: string

	_preferredReportName?: Element

	quantitativeDetails?: ObservationDefinitionQuantitativeDetails

	qualifiedInterval?: ObservationDefinitionQualifiedInterval[]
	/** The set of valid coded results for the observations  conforming to this ObservationDefinition. */
	validCodedValueSet?: Reference
	/** The set of normal coded results for the observations conforming to this ObservationDefinition. */
	normalCodedValueSet?: Reference
	/** The set of abnormal coded results for the observation conforming to this ObservationDefinition. */
	abnormalCodedValueSet?: Reference
	/** The set of critical coded results for the observation conforming to this ObservationDefinition. */
	criticalCodedValueSet?: Reference
}

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */

export interface ObservationDefinitionQuantitativeDetails {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Customary unit used to report quantitative results of observations conforming to this ObservationDefinition. */
	customaryUnit?: CodeableConcept
	/** SI unit used to report quantitative results of observations conforming to this ObservationDefinition. */
	unit?: CodeableConcept
	/** Factor for converting value expressed with SI unit to value expressed with customary unit. */
	conversionFactor?: number

	_conversionFactor?: Element
	/** Number of digits after decimal separator when the results of such observations are of type Quantity. */
	decimalPrecision?: number

	_decimalPrecision?: Element
}

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */

export interface ObservationDefinitionQualifiedInterval {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition. */
	category?: 'reference' | 'critical' | 'absolute'

	_category?: Element
	/** The low and high values determining the interval. There may be only one of the two. */
	range?: Range
	/** Codes to indicate the health context the range applies to. For example, the normal or therapeutic range. */
	context?: CodeableConcept
	/** Codes to indicate the target population this reference range applies to. */
	appliesTo?: CodeableConcept[]
	/** Sex of the population the range applies to. */
	gender?: 'male' | 'female' | 'other' | 'unknown'

	_gender?: Element
	/** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so. */
	age?: Range
	/** The gestational age to which this reference range is applicable, in the context of pregnancy. */
	gestationalAge?: Range
	/** Text based condition for which the reference range is valid. */
	condition?: string

	_condition?: Element
}
