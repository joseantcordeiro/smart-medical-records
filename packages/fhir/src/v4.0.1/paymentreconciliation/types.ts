import type {
	CodeableConcept,
	Element,
	Extension,
	Identifier,
	Meta,
	Money,
	Period,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */

export interface PaymentReconciliation<Contained = ResourceList> {
	resourceType: `PaymentReconciliation`
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
	/** A unique identifier assigned to this payment reconciliation. */
	identifier?: Identifier[]
	/** The status of the resource instance. */
	status: string

	_status?: Element
	/** The period of time for which payments have been gathered into this bulk payment for settlement. */
	period?: Period
	/** The date when the resource was created. */
	created: string

	_created?: Element
	/** The party who generated the payment. */
	paymentIssuer?: Reference
	/** Original request resource reference. */
	request?: Reference
	/** The practitioner who is responsible for the services rendered to the patient. */
	requestor?: Reference
	/** The outcome of a request for a reconciliation. */
	outcome?: 'queued' | 'complete' | 'error' | 'partial'

	_outcome?: Element
	/** A human readable description of the status of the request for the reconciliation. */
	disposition?: string

	_disposition?: Element
	/** The date of payment as indicated on the financial instrument. */
	paymentDate: string

	_paymentDate?: Element
	/** Total payment amount as indicated on the financial instrument. */
	paymentAmount: Money
	/** Issuer's unique identifier for the payment instrument. */
	paymentIdentifier?: Identifier

	detail?: PaymentReconciliationDetail[]
	/** A code for the form to be used for printing the content. */
	formCode?: CodeableConcept

	processNote?: PaymentReconciliationProcessNote[]
}

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */

export interface PaymentReconciliationDetail {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Unique identifier for the current payment item for the referenced payable. */
	identifier?: Identifier
	/** Unique identifier for the prior payment item for the referenced payable. */
	predecessor?: Identifier
	/** Code to indicate the nature of the payment. */
	type: CodeableConcept
	/** A resource, such as a Claim, the evaluation of which could lead to payment. */
	request?: Reference
	/** The party which submitted the claim or financial transaction. */
	submitter?: Reference
	/** A resource, such as a ClaimResponse, which contains a commitment to payment. */
	response?: Reference
	/** The date from the response resource containing a commitment to pay. */
	date?: string

	_date?: Element
	/** A reference to the individual who is responsible for inquiries regarding the response and its payment. */
	responsible?: Reference
	/** The party which is receiving the payment. */
	payee?: Reference
	/** The monetary amount allocated from the total payment to the payable. */
	amount?: Money
}

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */

export interface PaymentReconciliationProcessNote {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The business purpose of the note text. */
	type?: 'display' | 'print' | 'printoper'

	_type?: Element
	/** The explanation or description associated with the processing. */
	text?: string

	_text?: Element
}
