/**
 * Xero Projects API
 * This is the Xero Projects API
 *
<<<<<<< HEAD
 * The version of the OpenAPI document: 2.1.3
=======
 * The version of the OpenAPI document: 2.1.2
>>>>>>> master
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ModelError {
    /**
    * Exception message
    */
    'message'?: string;
    /**
    * Array of Elements of validation Errors
    */
    'modelState'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "modelState",
            "baseName": "modelState",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

