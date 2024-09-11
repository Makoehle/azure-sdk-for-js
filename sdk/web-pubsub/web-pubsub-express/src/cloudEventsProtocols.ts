// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MqttV311ConnectReturnCode } from "./enum/MqttErrorCodes/mqttV311ConnectReturnCode.js";
import { MqttV500ConnectReasonCode } from "./enum/MqttErrorCodes/mqttV500ConnectReasonCode.js";

/**
 * Response of the connect event.
 */
export interface ConnectResponse {
  /**
   * Set the groups the connection would like to join.
   */
  groups?: string[];
  /**
   * Set the roles the connection belongs to.
   */
  roles?: string[];
  /**
   * Set the userId for the connection.
   */
  userId?: string;
  /**
   * Set the subprotocol for the connection to complete WebSocket handshake.
   */
  subprotocol?: string;
}

/**
 * Success respones of the connect event.
 */
export interface MqttConnectResponse extends ConnectResponse {
  /**
   * The MQTT specific properties in a successful MQTT connection event response.
   */
  mqtt?: MqttConnectResponseProperties;
}

/**
 * Response of an MQTT connection failure.
 */
export interface MqttConnectEventErrorResponse {
  /**
   * The properties of the MQTT connection failure response.
   */
  mqtt: MqttConnectEventErrorResponseProperties; 
}

/**
 * The properties of an MQTT connection failure response.
 */
export interface MqttConnectEventErrorResponseProperties {
  /**
   * The MQTT connect return code.
   */
  code: MqttV311ConnectReturnCode | MqttV500ConnectReasonCode;
  /**
   * The reason string for the connection failure.
   */
  reason?: string;
  /**
   * The user properties in the response.
   */
  userProperties?: MqttUserProperty[];
}

/**
 * The connection context representing the client WebSocket connection.
 */
export interface ConnectionContext {
  /**
   * The unique identifier generated by the service of the network connection.
   */
  signature: string;
  /**
   * The hub the connection belongs to.
   */
  hub: string;
  /**
   * The Id of the connection.
   */
  connectionId: string;
  /**
   * The event name of this CloudEvents request.
   */
  eventName: string;
  /**
   * The origin this CloudEvents request comes from.
   */
  origin: string;
  /**
   * The user id of the connection.
   */
  userId?: string;
  /**
   * The subprotocol of this connection.
   */
  subprotocol?: string;
  /**
   * Get the additional states for the connection, such states are perserved throughout the lifetime of the connection.
   */
  states: Record<string, any>;
}

/**
 * The connection context representing the MQTT client WebSocket connection.
 */
export interface MqttConnectionContext extends ConnectionContext {
  /**
   * The unique identifier generated by the service of the network connection.
   */
  physicalConnectionId: string;
  /**
   * The unique identifier generated by the service of the MQTT session.
   */
  sessionId?: string;
}

/**
 * Request for the connect event.
 */
export interface ConnectRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext | MqttConnectionContext;
  /**
   * The claims that the client WebSocket connection has when it connects.
   */
  claims?: Record<string, string[]>;
  /**
   * The query that the client WebSocket connection has when it connects.
   * @deprecated Please use queries instead.
   */
  query?: Record<string, string[]>;
  /**
   * The queries that the client WebSocket connection has when it connects.
   */
  queries?: Record<string, string[]>;
  /**
   * The headers that the client WebSocket connection has when it connects.
   */
  headers?: Record<string, string[]>;
  /**
   * The subprotocols that the client WebSocket connection uses to do handshake.
   */
  subprotocols?: string[];
  /**
   * The client certificate info that the client WebSocket connection uses to connect.
   */
  clientCertificates?: Certificate[];
}

/**
 * Request for the MQTT connect event.
 */
export interface MqttConnectRequest extends ConnectRequest {
    mqtt: MqttConnectProperties;
}

/**
 * The properties of the MQTT CONNECT packet.
 */
export interface MqttConnectProperties {
  /**
   * MQTT protocol version.
   */
  protocolVersion: string;
  /**
   * The username field in the MQTT CONNECT packet.
   */
  username: string;
  /**
   * The password field in the MQTT CONNECT packet.
   */
  password: string;
  /**
   * The user properties in the MQTT CONNECT packet.
   */
  userProperties: MqttUserProperty[];
}

/**
 * The properties of a successful MQTT connection event response
 */
export interface MqttConnectResponseProperties {
  /**
   * Additional diagnostic or other information provided by upstream server
   * Now only MQTT 5.0 supports user properties
   */
  userProperties: MqttUserProperty[];
}

/**
 * The properties of a user in MQTT.
 */
export interface MqttUserProperty {
  /**
   * The name of the property.
   */
  name: string;
  /**
   * The value of the property.
   */
  value: string;
}

/**
 * The client certificate.
 */
export interface Certificate {
  /**
   * The thumbprint of the certificate.
   */
  thumbprint: string;
}

/**
 * Request for the connected event.
 */
export interface ConnectedRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;
}

/**
 * Request for the user event.
 */
export type UserEventRequest =
  | {
      /**
       * The context of current CloudEvents request.
       */
      context: ConnectionContext;

      /**
       * The content data.
       */
      data: string;
      /**
       * The type of the data.
       */
      dataType: "text";
    }
  | {
      /**
       * The context of current CloudEvents request.
       */
      context: ConnectionContext;

      /**
       * The content data, when data type is `json`, the data is the result of JSON.parse, so the type of the data depends on user scenarios
       */
      data: unknown;

      /**
       * The type of the data.
       */
      dataType: "json";
    }
  | {
      /**
       * The context of current CloudEvents request.
       */
      context: ConnectionContext;

      /**
       * The content data.
       */
      data: ArrayBuffer;
      /**
       * The type of the data.
       */
      dataType: "binary";
    };

/**
 * Request for the disconnected event.
 */
export interface DisconnectedRequest {
  /**
   * The context of current CloudEvents request.
   */
  context: ConnectionContext;
  /**
   * The reason that the connection disconnects.
   */
  reason?: string;
}

/**
 * The handler to set connect event response
 */
export interface ConnectResponseHandler {
  /**
   * Set the state of the connection
   * @param name - The name of the state
   * @param value - The value of the state
   */
  setState(name: string, value: unknown): void;
  /**
   * Return success response to the service.
   * @param response - The response for the connect event.
   */
  success(response?: ConnectResponse): void;
  /**
   * Return failed response and the service will reject the client WebSocket connection.
   * @param code - Code can be 400 user error, 401 unauthorized and 500 server error.
   * @param detail - The detail of the error.
   */
  fail(code: 400 | 401 | 500, detail?: string): void;
  /**
   * Return failed response with MQTT response properties and the service will reject the client WebSocket connection.
   * @param response - The response for the connect event which contains MQTT response properties.
   */
  failWithMqttResponse(response: MqttConnectEventErrorResponse): void;
}

/**
 * The handler to set user event response
 */
export interface UserEventResponseHandler {
  /**
   * Set the state of the connection
   * @param name - The name of the state
   * @param value - The value of the state
   */
  setState(name: string, value: unknown): void;
  /**
   * Return success response with data to be delivered to the client WebSocket connection.
   * @param data - The payload data to be returned to the client. Stringify the message if it is a JSON object.
   * @param dataType - The type of the payload data.
   */
  success(data?: string | ArrayBuffer, dataType?: "binary" | "text" | "json"): void;
  /**
   * Return failed response and the service will close the client WebSocket connection.
   * @param code - Code can be 400 user error, 401 unauthorized and 500 server error.
   * @param detail - The detail of the error.
   */
  fail(code: 400 | 401 | 500, detail?: string): void;
}

/**
 * The options for the CloudEvents handler.
 */
export interface WebPubSubEventHandlerOptions {
  /**
   * Custom serving path for the path of the CloudEvents handler.
   */
  path?: string;

  /**
   * Handle 'connect' event, the service waits for the response to proceed.
   */
  handleConnect?: (connectRequest: ConnectRequest, connectResponse: ConnectResponseHandler) => void;

  /**
   * Handle user events, the service waits for the response to proceed.
   */
  handleUserEvent?: (
    userEventRequest: UserEventRequest,
    userEventResponse: UserEventResponseHandler,
  ) => void;

  /**
   * Event trigger for "connected" unblocking event. This is an unblocking event and the service does not wait for the response.
   */
  onConnected?: (connectedRequest: ConnectedRequest) => void;

  /**
   *
   * Event triggers for "disconnected" unblocking event. This is an unblocking event and the service does not wait for the response.
   */
  onDisconnected?: (disconnectedRequest: DisconnectedRequest) => void;

  /**
   * If not specified, by default allow all the endpoints, otherwise only allow specified endpoints
   */
  allowedEndpoints?: string[];
}
