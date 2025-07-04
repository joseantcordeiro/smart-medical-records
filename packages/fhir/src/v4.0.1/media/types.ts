import type {
	Annotation,
	Attachment,
	CodeableConcept,
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

/** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */

export interface Media<Contained = ResourceList> {
	resourceType: `Media`
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
	/** Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers. */
	identifier?: Identifier[]
	/** A procedure that is fulfilled in whole or in part by the creation of this media. */
	basedOn?: Reference[]
	/** A larger event of which this particular event is a component or step. */
	partOf?: Reference[]
	/** The current state of the {{title}}. */
	status: string

	_status?: Element
	/** A code that classifies whether the media is an image, video or audio recording or some other media category. */
	type?: CodeableConcept
	/** Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality. */
	modality?: CodeableConcept
	/** The name of the imaging view e.g. Lateral or Antero-posterior (AP). */
	view?: CodeableConcept
	/** Who/What this Media is a record of. */
	subject?: Reference
	/** The encounter that establishes the context for this media. */
	encounter?: Reference

	createdDateTime?: string

	_createdDateTime?: Element

	createdPeriod?: Period
	/** The date and time this version of the media was made available to providers, typically after having been reviewed. */
	issued?: string

	_issued?: Element
	/** The person who administered the collection of the image. */
	operator?: Reference
	/** Describes why the event occurred in coded or textual form. */
	reasonCode?: CodeableConcept[]
	/** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
	bodySite?: CodeableConcept
	/** The name of the device / manufacturer of the device  that was used to make the recording. */
	deviceName?: string

	_deviceName?: Element
	/** The device used to collect the media. */
	device?: Reference
	/** Height of the image in pixels (photo/video). */
	height?: number

	_height?: Element
	/** Width of the image in pixels (photo/video). */
	width?: number

	_width?: Element
	/** The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required. */
	frames?: number

	_frames?: Element
	/** The duration of the recording in seconds - for audio and video. */
	duration?: number

	_duration?: Element
	/** The actual content of the media - inline or by direct reference to the media source file. */
	content: Attachment
	/** Comments made about the media by the performer, subject or other participants. */
	note?: Annotation[]
}
