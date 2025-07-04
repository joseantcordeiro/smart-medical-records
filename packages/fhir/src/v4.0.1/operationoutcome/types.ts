import type { CodeableConcept, Element, Extension, Meta } from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** A collection of error, warning, or information messages that result from a system action. */

export interface OperationOutcome<Contained = ResourceList> {
	resourceType: `OperationOutcome`
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

	issue: OperationOutcomeIssue[]
}

/** A collection of error, warning, or information messages that result from a system action. */

export interface OperationOutcomeIssue {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Indicates whether the issue indicates a variation from successful processing. */
	severity: 'fatal' | 'error' | 'warning' | 'information'

	_severity?: Element
	/** Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element. */
	code:
		| 'invalid'
		| 'structure'
		| 'required'
		| 'value'
		| 'invariant'
		| 'security'
		| 'login'
		| 'unknown'
		| 'expired'
		| 'forbidden'
		| 'suppressed'
		| 'processing'
		| 'not-supported'
		| 'duplicate'
		| 'multiple-matches'
		| 'not-found'
		| 'deleted'
		| 'too-long'
		| 'code-invalid'
		| 'extension'
		| 'too-costly'
		| 'business-rule'
		| 'conflict'
		| 'transient'
		| 'lock-error'
		| 'no-store'
		| 'exception'
		| 'timeout'
		| 'incomplete'
		| 'throttled'
		| 'informational'

	_code?: Element
	/** Additional details about the error. This may be a text description of the error or a system code that identifies the error. */
	details?: CodeableConcept
	/** Additional diagnostic information about the issue. */
	diagnostics?: string

	_diagnostics?: Element
	/** This element is deprecated because it is XML specific. It is replaced by issue.expression, which is format independent, and simpler to parse. 

For resource issues, this will be a simple XPath limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised.  For HTTP errors, will be "http." + the parameter name. */
	location?: string[]

	_location?: Element[]
	/** A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised. */
	expression?: string[]

	_expression?: Element[]
}
