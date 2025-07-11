import type {
	CodeableConcept,
	Coding,
	ContactPoint,
	Element,
	Extension,
	Identifier,
	Meta,
	Period,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information. */

export interface Endpoint<Contained = ResourceList> {
	resourceType: `Endpoint`
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
	/** Identifier for the organization that is used to identify the endpoint across multiple disparate systems. */
	identifier?: Identifier[]
	/** active | suspended | error | off | test. */
	status: 'active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test'

	_status?: Element
	/** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook). */
	connectionType: Coding
	/** A friendly name that this endpoint can be referred to with. */
	name?: string

	_name?: Element
	/** The organization that manages this endpoint (even if technically another organization is hosting this in the cloud, it is the organization associated with the data). */
	managingOrganization?: Reference
	/** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
	contact?: ContactPoint[]
	/** The interval during which the endpoint is expected to be operational. */
	period?: Period
	/** The payload type describes the acceptable content that can be communicated on the endpoint. */
	payloadType: CodeableConcept[]
	/** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType). */
	payloadMimeType?: string[]

	_payloadMimeType?: Element[]
	/** The uri that describes the actual end-point to connect to. */
	address: string

	_address?: Element
	/** Additional headers / information to send as part of the notification. */
	header?: string[]

	_header?: Element[]
}
