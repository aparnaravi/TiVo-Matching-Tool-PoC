export var  FilterDataType = {
    "STRINGDataType": [
        {
            "displayName": "Contains",
            "id": "contains",
            "operator": "Like",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Equal",
            "id": "equal",
            "operator": "eq",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Not Equal To",
            "id": "notEqualTo",
            "operator": "ne",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Empty",
            "id": "empty",
            "operator": "IsNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Not Empty",
            "id": "notEmpty",
            "operator": "IsNotNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Any Of",
            "id": "anyOf",
            "operator": "InList",
            "isValueExpression": true,
            "isRange": false,
            "tooltip": "Seprate multiple entries with ';'"
        }
    ],
    "DATEDataType": [
        {
            "displayName": "Greater Than",
            "id": "greaterThan",
            "operator": "gt",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Greater Than/Equal To",
            "id": "greaterThanEqualTo",
            "operator": "ge",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Less Than",
            "id": "lessThan",
            "operator": "lt",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Less Than/Equal To",
            "id": "lessThanEqualTo",
            "operator": "le",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Not Empty",
            "id": "notEmpty",
            "operator": "IsNotNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Empty",
            "id": "empty",
            "operator": "IsNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Between",
            "id": "between",
            "operator": "Between",
            "isValueExpression": true,
            "isRange": true,
        }
    ],
    "NUMBERDataType": [
        {
            "displayName": "Equal",
            "id": "equal",
            "operator": "eq",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Not Equal To",
            "id": "notEqualTo",
            "operator": "ne",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Greater Than",
            "id": "greaterThan",
            "operator": "gt",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Greater Than/Equal To",
            "id": "greaterThanEqualTo",
            "operator": "ge",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Less Than",
            "id": "lessThan",
            "operator": "lt",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Less Than/Equal To",
            "id": "lessThanEqualTo",
            "operator": "le",
            "isValueExpression": true,
            "isRange": false,
        },
        {
            "displayName": "Not Empty",
            "id": "notEmpty",
            "operator": "IsNotNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Empty",
            "id": "empty",
            "operator": "IsNull",
            "isValueExpression": false,
            "isRange": false,
        },
        {
            "displayName": "Any Of",
            "id": "anyOf",
            "operator": "InList",
            "isValueExpression": true,
            "isRange": false,
            "tooltip": "Seprate multiple entries with ';'"
        }
    ]
};