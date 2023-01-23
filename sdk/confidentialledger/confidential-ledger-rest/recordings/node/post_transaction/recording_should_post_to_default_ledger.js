let nock = require('nock');

module.exports.hash = "560374c7cf67bdf9cf29943418c80a71";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://identity.confidential-ledger.core.azure.com:443', {"encodedQueryParams":true})
  .get('/ledgerIdentity/emily-java-sdk-tests')
  .reply(200, {"ledgerTlsCertificate":"-----BEGIN CERTIFICATE-----\nMIIBejCCASCgAwIBAgIQMNwF270tS2Ex6jsW6jP46TAKBggqhkjOPQQDAjAWMRQw\nEgYDVQQDDAtDQ0YgTmV0d29yazAeFw0yMjA3MDYyMTA0NDBaFw0yMjEwMDQyMTA0\nMzlaMBYxFDASBgNVBAMMC0NDRiBOZXR3b3JrMFkwEwYHKoZIzj0CAQYIKoZIzj0D\nAQcDQgAEDUWr/JYiEUnNS+4Ndfcci6yGRXhVWSnabgvShqrdxW4RBmsKZ+qsAWJP\nnavsVjf8Zgd8gghMm1y4Zl4PoHzTxKNQME4wDAYDVR0TBAUwAwEB/zAdBgNVHQ4E\nFgQUiIlVb/2YkHp4mXRhBuLaadG82zYwHwYDVR0jBBgwFoAUiIlVb/2YkHp4mXRh\nBuLaadG82zYwCgYIKoZIzj0EAwIDSAAwRQIgfYFw63rQ8RrH0BBs6yWbYbm+OWCq\nwyWR8oAT90gwHtACIQDNJ3eIewMJNDtUSJaRYhOIOu10evuW63wBLP/kftLAmw==\n-----END CERTIFICATE-----\n","ledgerId":"emily-java-sdk-tests"}, [
  'Date',
  'Tue, 13 Sep 2022 15:32:14 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Server',
  'Kestrel',
  'Transfer-Encoding',
  'chunked',
  'x-ms-correlation-request-id',
  'b3da12f3-f124-4eda-919f-e962c2d17a63',
  'x-ms-client-request-id',
  '6c596fec-0312-43cd-a32a-4b2d0cc5a70a',
  'x-ms-machineName',
  'identityservice-69c77996fb-x6cqv',
  'x-ms-image-digest',
  'sha256:ff7211ed279924272e3c73dad9a7b9a438c814cee7fca952eed9f38b393580ef',
  'x-ms-image-tag',
  '1.0.02049.29-cb8535e39ba27833da973165c9003a442deb7d8d'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '317e3bcc-849b-43f5-bcd7-dbfc40e12f00',
  'x-ms-ests-server',
  '2.1.13622.7 - WUS2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AqT9ixMvQaZAnXyXXJlNJRc; expires=Thu, 13-Oct-2022 15:32:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrejrQzNKLbdiWWSgpnNphWEBbY7l2htVhhqsgJ0HFXIOYGaAz60YPAGMUnCs2_tbZsE6WbcaR-g3iyicpDdy8zbdvpeNhGraF0tdHlmkeMWAvbWQBusizGUEGMoW3gn2FRIlzSN0m-14p6HTs9XTO_e6esGbRFyl7tX9peLCspOUgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 13 Sep 2022 15:32:15 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '53b57f6e-d5c2-46f0-bb57-1e2598142600',
  'x-ms-ests-server',
  '2.1.13672.7 - WUS2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AoxVQ99dOwxOhQOJbSjXh3g; expires=Thu, 13-Oct-2022 15:32:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrr415zAOT04qTZAuHjYOCLCj_AFj45Zl2-MM7FDy56wP1E42FuKJOPIaTnwCDv6dkASsSExa2FE-dnw-4s_kmZAQFGuyYLcpkapDel23s3z1l4-TU7P60yAtYSs-JiQ4528XBdzLNEkJSb6fY4TWZU1AxmBMPXNuSChfnMdUQDa0gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 13 Sep 2022 15:32:15 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.12.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=a8a8d1d7-f800-4b42-9268-04eb45db3917&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '3f5a1bf0-0f66-40d1-8fe7-36ba0ee81e00',
  'x-ms-ests-server',
  '2.1.13672.7 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Ai33GpZnCv5CoL4BTwW3QNgsHfw7AQAAAH-ZstoOAAAA; expires=Thu, 13-Oct-2022 15:32:15 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 13 Sep 2022 15:32:15 GMT',
  'Content-Length',
  '1334'
]);

nock('https://emily-java-sdk-tests.confidential-ledger.azure.com:443', {"encodedQueryParams":true})
  .post('/app/transactions', {"contents":"typescript post test"})
  .query(true)
  .reply(200, {"collectionId":"subledger:0"}, [
  'content-length',
  '30',
  'content-type',
  'application/json',
  'x-ms-ccf-transaction-id',
  '4.41232',
  'x-ms-client-request-id',
  'dcc23ce2-3b3b-442a-b433-d611e4b9b3f6',
  'x-ms-request-id',
  '261740655'
]);

nock('https://emily-java-sdk-tests.confidential-ledger.azure.com:443', {"encodedQueryParams":true})
  .get('/app/transactions/4.41232/status')
  .query(true)
  .reply(200, {"state":"Pending","transactionId":"4.41232"}, [
  'content-length',
  '45',
  'content-type',
  'application/json',
  'x-ms-ccf-transaction-id',
  '4.41232',
  'x-ms-client-request-id',
  '637bd395-0681-4c3f-939b-91ed3d9d6972',
  'x-ms-request-id',
  '446140677'
]);

nock('https://emily-java-sdk-tests.confidential-ledger.azure.com:443', {"encodedQueryParams":true})
  .get('/app/transactions/4.41232/receipt')
  .query(true)
  .reply(406, {"error":{"code":"UncommittedLedgerEntry","message":"The specified transaction (4.41232) is not committed yet, please wait until the service reports a transaction id at least as high."}}, [
  'content-length',
  '186',
  'content-type',
  'application/json',
  'x-ms-client-request-id',
  '5509d38f-1e9e-4fb4-a4ff-87a6694acc95',
  'x-ms-request-id',
  '2025108483'
]);
