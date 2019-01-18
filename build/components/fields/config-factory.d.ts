export declare function textConfigFactory(conf: {
    [key: string]: any;
}): {
    label: string;
    errorText: string;
    fieldClass: string;
    required: boolean;
    schema: import("joi").StringSchema;
};
