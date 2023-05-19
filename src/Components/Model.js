const model = [
    {
        "pageName": "BorrowerInfo",
        "fields": [
            {
                "fieldId": "1",
                "fieldName": "Property Name",
                "type": "string"
            },
            {
                "fieldId": "2",
                "fieldName": "Property Type",
                "type": "dropdown",
                "selectableValues": ["Own House",
                    "Rented"]
            },
            {
                "fieldId": "3",
                "fieldName": "Number of Units",
                "type": "dropdown",
                "selectableValues": ["1", "2"]
            },
            {
                "fieldId": "4",
                "fieldName": "Property Address",
                "type": "textarea"
            },
            {
                "fieldId": "5",
                "fieldName": "File Attachment",
                "type": "file"
            }
        ]
    },
    // {
    //     "pageName": "DirectorInfo",
    //     "fields": [
    //         {
    //             "fieldId": "1",
    //             "fieldName": "Property Name",
    //             "type": "string"
    //         },
    //         {
    //             "fieldId": "2",
    //             "fieldName": "Property Type",
    //             "type": "dropdown",
    //             "selectableValues": ["Own House",
    //                 "Rented"]
    //         },
    //         {
    //             "fieldId": "3",
    //             "fieldName": "Number of Units",
    //             "type": "dropdown",
    //             "selectableValues": ["1", "2"]
    //         },
    //         {
    //             "fieldId": "4",
    //             "fieldName": "Property Address",
    //             "type": "textarea"
    //         },
    //         {
    //             "fieldId": "5",
    //             "fieldName": "File Attachment",
    //             "type": "file"
    //         }
    //     ]
    // }
]


export default model;