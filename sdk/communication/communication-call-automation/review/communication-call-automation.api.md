## API Report File for "@azure/communication-call-automation"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import { CommonClientOptions } from '@azure/core-client';
import { CommunicationIdentifier } from '@azure/communication-common';
import { CommunicationUserIdentifier } from '@azure/communication-common';
import * as coreClient from '@azure/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-client';
import { PhoneNumberIdentifier } from '@azure/communication-common';
import { TokenCredential } from '@azure/core-auth';

// @public
export interface AddParticipantFailed extends Omit<RestAddParticipantFailed, "callConnectionId" | "serverCallId" | "correlationId" | "participant" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "AddParticipantFailed";
    participant?: CommunicationIdentifier;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface AddParticipantOptions extends OperationOptions {
    invitationTimeoutInSeconds?: number;
    operationContext?: string;
}

// @public
export interface AddParticipantResult {
    operationContext?: string;
    participant?: CallParticipant;
}

// @public
export interface AddParticipantSucceeded extends Omit<RestAddParticipantSucceeded, "callConnectionId" | "serverCallId" | "correlationId" | "participant" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "AddParticipantSucceeded";
    participant?: CommunicationIdentifier;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface AnswerCallOptions extends OperationOptions {
    azureCognitiveServicesEndpointUrl?: string;
    mediaStreamingConfiguration?: MediaStreamingConfiguration;
    operationContext?: string;
}

// Warning: (ae-forgotten-export) The symbol "CallResult" needs to be exported by the entry point index.d.ts
//
// @public
export type AnswerCallResult = CallResult;

// @public
export class CallAutomationClient {
    constructor(connectionString: string, options?: CallAutomationClientOptions);
    constructor(endpoint: string, credential: TokenCredential | KeyCredential, options?: CallAutomationClientOptions);
    answerCall(incomingCallContext: string, callbackUrl: string, options?: AnswerCallOptions): Promise<AnswerCallResult>;
    createCall(targetParticipant: CallInvite, callbackUrl: string, options?: CreateCallOptions): Promise<CreateCallResult>;
    createGroupCall(targetParticipants: CommunicationIdentifier[], callbackUrl: string, options?: CreateCallOptions): Promise<CreateCallResult>;
    getCallConnection(callConnectionId: string): CallConnection;
    getCallRecording(): CallRecording;
    getSourceIdentity(): CommunicationUserIdentifier | undefined;
    redirectCall(incomingCallContext: string, targetParticipant: CallInvite, options?: RedirectCallOptions): Promise<void>;
    rejectCall(incomingCallContext: string, options?: RejectCallOptions): Promise<void>;
}

// @public
export interface CallAutomationClientOptions extends CommonClientOptions {
    sourceIdentity?: CommunicationUserIdentifier;
}

// @public
export type CallAutomationEvent = AddParticipantSucceeded | AddParticipantFailed | RemoveParticipantSucceeded | RemoveParticipantFailed | CallConnected | CallDisconnected | CallTransferAccepted | CallTransferFailed | ParticipantsUpdated | RecordingStateChanged | PlayCompleted | PlayFailed | PlayCanceled | RecognizeCompleted | RecognizeCanceled | RecognizeFailed | ContinuousDtmfRecognitionToneReceived | ContinuousDtmfRecognitionToneFailed | ContinuousDtmfRecognitionStopped | SendDtmfCompleted | SendDtmfFailed;

// @public
export interface CallConnected extends Omit<RestCallConnected, "callConnectionId" | "serverCallId" | "correlationId"> {
    callConnectionId: string;
    correlationId: string;
    kind: "CallConnected";
    serverCallId: string;
}

// @public
export class CallConnection {
    // Warning: (ae-forgotten-export) The symbol "CallAutomationApiClientOptionalParams" needs to be exported by the entry point index.d.ts
    constructor(callConnectionId: string, endpoint: string, credential: KeyCredential | TokenCredential, options?: CallAutomationApiClientOptionalParams);
    addParticipant(targetParticipant: CallInvite, options?: AddParticipantOptions): Promise<AddParticipantResult>;
    getCallConnectionProperties(options?: GetCallConnectionPropertiesOptions): Promise<CallConnectionProperties>;
    getCallMedia(): CallMedia;
    getParticipant(targetParticipant: CommunicationIdentifier, options?: GetParticipantOptions): Promise<CallParticipant>;
    hangUp(isForEveryone: boolean, options?: HangUpOptions): Promise<void>;
    listParticipants(options?: GetParticipantOptions): Promise<ListParticipantsResult>;
    removeParticipant(participant: CommunicationIdentifier, options?: RemoveParticipantsOption): Promise<RemoveParticipantResult>;
    transferCallToParticipant(targetParticipant: CommunicationIdentifier, options?: TransferCallToParticipantOptions): Promise<TransferCallResult>;
}

// @public
export interface CallConnectionProperties {
    answeredByIdentifier?: CommunicationUserIdentifier;
    callbackUrl?: string;
    callConnectionId?: string;
    callConnectionState?: CallConnectionStateModel;
    correlationId?: string;
    mediaSubscriptionId?: string;
    serverCallId?: string;
    sourceCallerIdNumber?: PhoneNumberIdentifier;
    sourceDisplayName?: string;
    sourceIdentity?: CommunicationIdentifier;
    targetParticipants?: CommunicationIdentifier[];
}

// @public
export type CallConnectionStateModel = string;

// @public
export interface CallDisconnected extends Omit<RestCallDisconnected, "callConnectionId" | "serverCallId" | "correlationId"> {
    callConnectionId: string;
    correlationId: string;
    kind: "CallDisconnected";
    serverCallId: string;
}

// @public
export interface CallInvite {
    readonly sipHeaders?: {
        [propertyName: string]: string;
    };
    readonly sourceCallIdNumber?: PhoneNumberIdentifier;
    // (undocumented)
    sourceDisplayName?: string;
    readonly targetParticipant: PhoneNumberIdentifier | CommunicationUserIdentifier;
    readonly voipHeaders?: {
        [propertyName: string]: string;
    };
}

// @public
export interface CallLocator {
    // (undocumented)
    id: string;
    // (undocumented)
    kind: CallLocatorType;
}

// @public
export type CallLocatorType = "serverCallLocator" | "groupCallLocator";

// @public
export class CallMedia {
    constructor(callConnectionId: string, endpoint: string, credential: KeyCredential | TokenCredential, options?: CallAutomationApiClientOptionalParams);
    cancelAllOperations(): Promise<void>;
    play(playSource: FileSource, playTo: CommunicationIdentifier[], playOptions?: PlayOptions): Promise<void>;
    playToAll(playSource: FileSource, playOptions?: PlayOptions): Promise<void>;
    // Warning: (ae-forgotten-export) The symbol "Tone" needs to be exported by the entry point index.d.ts
    sendDtmf(targetParticipant: CommunicationIdentifier, tones: Tone[], sendDtmfOptions?: SendDtmfOptions): Promise<void>;
    startContinuousDtmfRecognition(targetParticipant: CommunicationIdentifier, continuousDtmfRecognitionOptions?: ContinuousDtmfRecognitionOptions): Promise<void>;
    startRecognizing(targetParticipant: CommunicationIdentifier, maxTonesToCollect: number, recognizeOptions: CallMediaRecognizeDtmfOptions): Promise<void>;
    stopContinuousDtmfRecognition(targetParticipant: CommunicationIdentifier, continuousDtmfRecognitionOptions?: ContinuousDtmfRecognitionOptions): Promise<void>;
}

// @public
export interface CallMediaRecognizeDtmfOptions extends CallMediaRecognizeOptions {
    // (undocumented)
    interToneTimeoutInSeconds?: number;
    // (undocumented)
    readonly kind: "callMediaRecognizeDtmfOptions";
    // (undocumented)
    stopDtmfTones?: DtmfTone[];
}

// @public
export interface CallMediaRecognizeOptions extends OperationOptions {
    // (undocumented)
    initialSilenceTimeoutInSeconds?: number;
    // (undocumented)
    interruptCallMediaOperation?: boolean;
    // (undocumented)
    interruptPrompt?: boolean;
    // (undocumented)
    operationContext?: string;
    // (undocumented)
    playPrompt?: FileSource;
    // (undocumented)
    stopCurrentOperations?: boolean;
}

// @public
export interface CallParticipant {
    identifier?: CommunicationIdentifier;
    isMuted?: boolean;
}

// @public
export class CallRecording {
    constructor(endpoint: string, credential: KeyCredential | TokenCredential, options?: CallAutomationApiClientOptionalParams);
    delete(recordingLocationUrl: string, options?: DeleteRecordingOptions): Promise<void>;
    downloadStreaming(sourceLocationUrl: string, options?: DownloadRecordingOptions): Promise<NodeJS.ReadableStream>;
    downloadToPath(sourceLocationUrl: string, destinationPath: string, options?: DownloadRecordingOptions): Promise<void>;
    downloadToStream(sourceLocationUrl: string, destinationStream: NodeJS.WritableStream, options?: DownloadRecordingOptions): Promise<void>;
    getState(recordingId: string, options?: GetRecordingPropertiesOptions): Promise<RecordingStateResult>;
    pause(recordingId: string, options?: PauseRecordingOptions): Promise<void>;
    resume(recordingId: string, options?: ResumeRecordingOptions): Promise<void>;
    start(options: StartRecordingOptions): Promise<RecordingStateResult>;
    stop(recordingId: string, options?: StopRecordingOptions): Promise<void>;
}

// @public
export type CallRejectReason = string;

// @public
export interface CallTransferAccepted extends Omit<RestCallTransferAccepted, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "CallTransferAccepted";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface CallTransferFailed extends Omit<RestCallTransferFailed, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "CallTransferFailed";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface ChannelAffinity {
    channel?: number;
    targetParticipant: CommunicationIdentifier;
}

// @public
export interface ContinuousDtmfRecognitionOptions extends OperationOptions {
    operationContext?: string;
}

// @public
export interface ContinuousDtmfRecognitionStopped extends Omit<RestContinuousDtmfRecognitionStopped, "callConnectionId" | "serverCallId" | "correlationId | operationContext | resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "ContinuousDtmfRecognitionStopped";
    operationContext: string;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface ContinuousDtmfRecognitionToneFailed extends Omit<RestContinuousDtmfRecognitionToneFailed, "callConnectionId" | "serverCallId" | "correlationId | resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "ContinuousDtmfRecognitionToneFailed";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface ContinuousDtmfRecognitionToneReceived extends Omit<RestContinuousDtmfRecognitionToneReceived, "toneInfo | callConnectionId" | "serverCallId" | "correlationId | resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "ContinuousDtmfRecognitionToneReceived";
    resultInformation?: ResultInformation;
    serverCallId: string;
    toneInfo: ToneInfo;
}

// @public
export interface CreateCallOptions extends OperationOptions {
    azureCognitiveServicesEndpointUrl?: string;
    mediaStreamingConfiguration?: MediaStreamingConfiguration;
    operationContext?: string;
    sipHeaders?: {
        [propertyName: string]: string;
    };
    sourceCallIdNumber?: PhoneNumberIdentifier;
    sourceDisplayName?: string;
    voipHeaders?: {
        [propertyName: string]: string;
    };
}

// @public
export type CreateCallResult = CallResult;

// @public
export type DeleteRecordingOptions = OperationOptions;

// @public
export interface DownloadRecordingOptions extends OperationOptions {
    length?: number;
    offset?: number;
}

// @public
export enum DtmfTone {
    // (undocumented)
    A = "a",
    Asterisk = "asterisk",
    // (undocumented)
    B = "b",
    // (undocumented)
    C = "c",
    // (undocumented)
    D = "d",
    Eight = "eight",
    Five = "five",
    Four = "four",
    Nine = "nine",
    One = "one",
    Pound = "pound",
    Seven = "seven",
    Six = "six",
    Three = "three",
    Two = "two",
    Zero = "zero"
}

// @public
export interface FileSource extends PlaySource {
    // (undocumented)
    readonly kind: "fileSource";
    // (undocumented)
    url: string;
}

// @public
export type GetCallConnectionPropertiesOptions = OperationOptions;

// @public
export type GetParticipantOptions = OperationOptions;

// @public
export type GetRecordingPropertiesOptions = OperationOptions;

// @public
export type HangUpOptions = OperationOptions;

// @public
export enum KnownCallRejectReason {
    Busy = "busy",
    Forbidden = "forbidden",
    None = "none"
}

// @public
export enum KnownMediaStreamingAudioChannelType {
    Mixed = "mixed",
    Unmixed = "unmixed"
}

// @public
export enum KnownMediaStreamingContentType {
    Audio = "audio"
}

// @public
export enum KnownMediaStreamingTransportType {
    Websocket = "websocket"
}

// @public
export interface ListParticipantsResult {
    nextLink?: string;
    values?: CallParticipant[];
}

// @public
export type MediaStreamingAudioChannelType = string;

// @public
export interface MediaStreamingConfiguration {
    audioChannelType: MediaStreamingAudioChannelType;
    contentType: MediaStreamingContentType;
    transportType: MediaStreamingTransportType;
    transportUrl: string;
}

// @public
export type MediaStreamingContentType = string;

// @public
export type MediaStreamingTransportType = string;

// @public
export function parseCallAutomationEvent(encodedEvents: string | Record<string, unknown>): CallAutomationEvent;

// @public
export interface ParticipantsUpdated extends Omit<RestParticipantsUpdated, "callConnectionId" | "serverCallId" | "correlationId" | "participants"> {
    callConnectionId: string;
    correlationId: string;
    kind: "ParticipantsUpdated";
    participants: CallParticipant[];
    serverCallId: string;
}

// @public
export type PauseRecordingOptions = OperationOptions;

// @public
export interface PlayCanceled extends Omit<RestPlayCanceled, "callConnectionId" | "serverCallId" | "correlationId"> {
    callConnectionId: string;
    correlationId: string;
    kind: "PlayCanceled";
    serverCallId: string;
}

// @public
export interface PlayCompleted extends Omit<RestPlayCompleted, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "PlayCompleted";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface PlayFailed extends Omit<RestPlayFailed, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "PlayFailed";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface PlayOptions extends OperationOptions {
    // (undocumented)
    loop?: boolean;
    // (undocumented)
    operationContext?: string;
}

// @public
export interface PlaySource {
    // (undocumented)
    playSourceId?: string;
}

// @public
export interface RecognizeCanceled extends Omit<RestRecognizeCanceled, "callConnectionId" | "serverCallId" | "correlationId"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RecognizeCanceled";
    serverCallId: string;
}

// @public
export interface RecognizeCompleted extends Omit<RestRecognizeCompleted, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RecognizeCompleted";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface RecognizeFailed extends Omit<RestRecognizeFailed, "callConnectionId" | "serverCallId" | "correlationId" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RecognizeFailed";
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export enum RecognizeInputType {
    Choices = "choices",
    Dtmf = "dtmf"
}

// @public
export type RecordingChannel = "mixed" | "unmixed";

// @public
export type RecordingContent = "audio" | "audioVideo";

// @public
export type RecordingFormat = "mp3" | "mp4" | "wav";

// @public
export interface RecordingStateChanged extends Omit<RestRecordingStateChanged, "callConnectionId" | "serverCallId" | "correlationId"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RecordingStateChanged";
    serverCallId: string;
}

// @public
export interface RecordingStateResult {
    // (undocumented)
    recordingId: string;
    // Warning: (ae-forgotten-export) The symbol "RecordingState" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    recordingState: RecordingState;
}

// @public
export type RecordingStorage = "acs" | "blobStorage";

// @public
export interface RedirectCallOptions extends OperationOptions {
    sipHeaders?: {
        [propertyName: string]: string;
    };
    voipHeaders?: {
        [propertyName: string]: string;
    };
}

// @public
export interface RejectCallOptions extends OperationOptions {
    callRejectReason?: CallRejectReason;
}

// @public
export interface RemoveParticipantFailed extends Omit<RestRemoveParticipantFailed, "callConnectionId" | "serverCallId" | "correlationId" | "participant" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RemoveParticipantFailed";
    participant?: CommunicationIdentifier;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface RemoveParticipantResult {
    operationContext?: string;
}

// @public
export interface RemoveParticipantsOption extends OperationOptions {
    operationContext?: string;
}

// @public
export interface RemoveParticipantSucceeded extends Omit<RestRemoveParticipantSucceeded, "callConnectionId" | "serverCallId" | "correlationId" | "participant" | "resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "RemoveParticipantSucceeded";
    participant?: CommunicationIdentifier;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface RestAddParticipantFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    // Warning: (ae-forgotten-export) The symbol "CommunicationIdentifierModel" needs to be exported by the entry point index.d.ts
    participant?: CommunicationIdentifierModel;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public
export interface RestAddParticipantSucceeded {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    participant?: CommunicationIdentifierModel;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public
export interface RestCallConnected {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    serverCallId?: string;
}

// @public
export interface RestCallDisconnected {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    serverCallId?: string;
}

// @public
export interface RestCallTransferAccepted {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public
export interface RestCallTransferFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestContinuousDtmfRecognitionStopped {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestContinuousDtmfRecognitionToneFailed {
    callConnectionId?: string;
    correlationId?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestContinuousDtmfRecognitionToneReceived {
    callConnectionId?: string;
    correlationId?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
    toneInfo?: RestToneInfo;
}

// @public
export interface RestParticipantsUpdated {
    callConnectionId?: string;
    correlationId?: string;
    // Warning: (ae-forgotten-export) The symbol "CallParticipantInternal" needs to be exported by the entry point index.d.ts
    participants?: CallParticipantInternal[];
    sequenceNumber?: number;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestPlayCanceled {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestPlayCompleted {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestPlayFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestRecognizeCanceled {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestRecognizeCompleted {
    callConnectionId?: string;
    // Warning: (ae-forgotten-export) The symbol "ChoiceResult" needs to be exported by the entry point index.d.ts
    choiceResult?: ChoiceResult;
    // Warning: (ae-forgotten-export) The symbol "CollectTonesResult" needs to be exported by the entry point index.d.ts
    collectTonesResult?: CollectTonesResult;
    correlationId?: string;
    // Warning: (ae-forgotten-export) The symbol "DtmfResult" needs to be exported by the entry point index.d.ts
    dtmfResult?: DtmfResult;
    operationContext?: string;
    // Warning: (ae-forgotten-export) The symbol "RecognitionType" needs to be exported by the entry point index.d.ts
    recognitionType?: RecognitionType;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
    // Warning: (ae-forgotten-export) The symbol "SpeechResult" needs to be exported by the entry point index.d.ts
    readonly speechResult?: SpeechResult;
}

// @public (undocumented)
export interface RestRecognizeFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestRecordingStateChanged {
    callConnectionId?: string;
    correlationId?: string;
    readonly recordingId?: string;
    serverCallId?: string;
    readonly startDateTime?: Date;
    // (undocumented)
    state?: RecordingState;
}

// @public
export interface RestRemoveParticipantFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    participant?: CommunicationIdentifierModel;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public
export interface RestRemoveParticipantSucceeded {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    participant?: CommunicationIdentifierModel;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestResultInformation {
    // (undocumented)
    code?: number;
    // (undocumented)
    message?: string;
    // (undocumented)
    subCode?: number;
}

// @public (undocumented)
export interface RestSendDtmfCompleted {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public (undocumented)
export interface RestSendDtmfFailed {
    callConnectionId?: string;
    correlationId?: string;
    operationContext?: string;
    resultInformation?: RestResultInformation;
    serverCallId?: string;
}

// @public
export interface RestToneInfo {
    participantId?: string;
    sequenceId: number;
    // (undocumented)
    tone: Tone;
}

// @public (undocumented)
export interface ResultInformation extends Omit<RestResultInformation, "code" | "subCode" | "message"> {
    code: number;
    message: string;
    subCode: number;
}

// @public
export type ResumeRecordingOptions = OperationOptions;

// @public
export interface SendDtmfCompleted extends Omit<RestSendDtmfCompleted, "callConnectionId" | "serverCallId" | "correlationId | operationContext | resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "SendDtmfCompleted";
    operationContext: string;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface SendDtmfFailed extends Omit<RestSendDtmfFailed, "callConnectionId" | "serverCallId" | "correlationId | operationContext | resultInformation"> {
    callConnectionId: string;
    correlationId: string;
    kind: "SendDtmfFailed";
    operationContext: string;
    resultInformation?: ResultInformation;
    serverCallId: string;
}

// @public
export interface SendDtmfOptions extends OperationOptions {
    operationContext?: string;
}

// @public
export interface StartRecordingOptions extends OperationOptions {
    audioChannelParticipantOrdering?: CommunicationIdentifier[];
    callLocator: CallLocator;
    channelAffinity?: ChannelAffinity[];
    recordingChannel?: RecordingChannel;
    recordingContent?: RecordingContent;
    recordingFormat?: RecordingFormat;
    recordingStateCallbackEndpointUrl?: string;
}

// @public
export type StopRecordingOptions = OperationOptions;

// @public
export interface ToneInfo extends Omit<RestToneInfo, "sequenceId" | "tone" | "participantId"> {
    participantId?: string;
    sequenceId: number;
    tone: Tone;
}

// @public
export interface TransferCallResult {
    operationContext?: string;
}

// @public
export interface TransferCallToParticipantOptions extends OperationOptions {
    operationContext?: string;
    sipHeaders?: {
        [propertyName: string]: string;
    };
    voipHeaders?: {
        [propertyName: string]: string;
    };
}

// (No @packageDocumentation comment for this package)

```