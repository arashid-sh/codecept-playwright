import { faker } from '@faker-js/faker';
import moment from 'moment';

export const asoSubscriber = {
  /**
   * @param emailAddress : the email address to create the account for
   * @param option: the kind of ASO subscriber you would like to create. Single, w/ spouse, family (spouse and child)
   * @returns: payloads for each of the subscribers specified.
   */
  generatePayload(emailAddress: string, option: string): any {
    // Option 'single' = ASO single subscriber
    // Option 'with spouse' = ASO subscriber + spouse
    // Option 'family' = ASO subscriber + spouse + child
    switch (option) {
      case 'single':
        return JSON.parse(
          `[
            {
              "purpose": "Original",
              "sender_transaction_id": "20211129100016",
              "created_at": "2021-11-29 18:41:00",
              "for_verification_only": false,
              "sponsor": {
                "sponsor_name": "Sidecar Health Inc",
                "sponsor_id": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                "sponsor_id_type": "Federal Tax ID"
              },
              "payer": {
                "payer_name": "SH",
                "payer_id": "512112921",
                "payer_id_type": "Federal Tax ID"
              },
              "members": [
                {
                  "is_subscriber": true,
                  "relationship_to_subscriber": "Self",
                  "action": "Addition",
                  "action_reason": "Initial Enrollment",
                  "benefit_status": "Active",
                  "employment_status": "Full-Time Active Employee",
                  "subscriber_id": "${faker.datatype.number({
                    max: 1000000,
                  })}",
                  "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                  "member_id": "831676780",
                  "member_details": {
                    "last_name": "${faker.name.firstName()}",
                    "first_name": "${faker.name.lastName()}",
                    "middle_name": "",
                    "name_prefix": "",
                    "name_suffix": "",
                    "ssn": "831671111",
                    "home_phone": "6296183839",
                    "email": "${emailAddress}",
                    "addresses": [
                      {
                        "address_type": "Street",
                        "address_1": "215 E Town St",
                        "city": "Columbus",
                        "state": "OH",
                        "zip_code": "43215"
                      }
                    ],
                    "birth_date": "2000-01-01",
                    "gender": "Male",
                    "marital_status": "Single"
                  },
                  "demographics_update_needed": false,
                  "policy": {
                    "policy_action": "Addition",
                    "tier_code": "EMP ",
                    "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                    "coverage_level": "Employee Only",
                    "benefits_begin_date": "${moment().format('YYYY-MM-DD')}"
                  }
                }
              ],
              "metadata": {
                "source_file_location": "s3://sidecar-aso-enrollment-edi-ease-qa/files_by_month/2022-01/01202022_IE_01.txt",
                "ingested_by_sidecar_at": "2022-01-20 18:32:31.376353",
                "file_received_from": "Ease"
              }
            }
          ]`
        );
      case 'with spouse':
        return JSON.parse(
          `[
            {
            "purpose": "Original",
            "sender_transaction_id": "20211129100016",
            "created_at": "2021-11-29 18:41:00",
            "for_verification_only": false,
            "sponsor": {
              "sponsor_name": "Sidecar Health Inc",
              "sponsor_id": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
              "sponsor_id_type": "Federal Tax ID"
            },
            "payer": {
              "payer_name": "SH",
              "payer_id": "512112921",
              "payer_id_type": "Federal Tax ID"
            },
            "members": [
              {
                "is_subscriber": true,
                "relationship_to_subscriber": "Self",
                "action": "Addition",
                "action_reason": "Initial Enrollment",
                "benefit_status": "Active",
                "employment_status": "Full-Time Active Employee",
                "subscriber_id": "${faker.datatype.number({
                  max: 1000000,
                })}",
                "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                "member_id": "${faker.datatype.number({
                  max: 1000000,
                })}",
                "member_details": {
                  "last_name": "${faker.name.firstName()}",
                  "first_name": "${faker.name.lastName()}",
                  "middle_name": "",
                  "name_prefix": "",
                  "name_suffix": "",
                  "ssn": "224381111",
                  "home_phone": "6296183838",
                  "email": "${emailAddress}",
                  "addresses": [
                    {
                      "address_type": "Street",
                      "address_1": "215 E Town St",
                      "city": "Columbus",
                      "state": "OH",
                      "zip_code": "43215"
                    },
                    {
                      "address_type": "Mailing",
                      "address_1": "215 E Town St",
                      "city": "Columbus",
                      "state": "OH",
                      "zip_code": "43215"
                    }
                  ],
                  "birth_date": "2000-01-01",
                  "gender": "Male",
                  "marital_status": "Registered Domestic Partner"
                },
                "demographics_update_needed": false,
                "policy": {
                  "policy_action": "Addition",
                  "tier_code": "ESP ",
                  "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                  "coverage_level": "Employee and Spouse",
                  "benefits_begin_date": "${moment().format('YYYY-MM-DD')}"
                }
              },
              {
                "is_subscriber": false,
                "relationship_to_subscriber": "Life Partner",
                "action": "Addition",
                "action_reason": "Initial Enrollment",
                "benefit_status": "Active",
                "employment_status": "Full-Time Active Employee",
                "subscriber_id": "${faker.datatype.number({
                  max: 1000000,
                })}",
                "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                "member_id": "334387773",
                "member_details": {
                  "last_name": "${faker.name.firstName()}",
                  "first_name": "${faker.name.lastName()} spouse",
                  "middle_name": "spouse",
                  "name_prefix": "",
                  "name_suffix": "",
                  "ssn": "334387773",
                  "home_phone": "6296183838",
                  "addresses": [
                    {
                      "address_type": "Street",
                      "address_1": "215 E Town St",
                      "city": "Columbus",
                      "state": "OH",
                      "zip_code": "43215"
                    },
                    {
                      "address_type": "Mailing",
                      "address_1": "215 E Town St",
                      "city": "Columbus",
                      "state": "OH",
                      "zip_code": "43215"
                    }
                  ],
                  "birth_date": "2000-01-01",
                  "gender": "Female"
                },
                "demographics_update_needed": false,
                "policy": {
                  "policy_action": "Addition",
                  "tier_code": "ESP ",
                  "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                  "benefits_begin_date": "${moment().format('YYYY-MM-DD')}"
                }
              }
            ],
            "metadata": {
              "source_file_location": "s3://sidecar-aso-enrollment-edi-ease-qa/files_by_month/2022-05/0001_Init_Enrol_Sub_Spouse_Bill.txt",
              "ingested_by_sidecar_at": "2022-05-23 23:24:51.045772",
              "file_received_from": "Ease"
            }
          }
       ]`
        );
      case 'family':
        return JSON.parse(
          `[
              {
                  "purpose": "Original",
                  "sender_transaction_id": "20211129100016",
                  "created_at": "2021-11-29 18:41:00",
                  "for_verification_only": false,
                  "sponsor": {
                      "sponsor_name": "Sidecar Health Inc",
                      "sponsor_id": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                      "sponsor_id_type": "Federal Tax ID"
                  },
                  "payer": {
                      "payer_name": "SH",
                      "payer_id": "512112921",
                      "payer_id_type": "Federal Tax ID"
                  },
                  "members": [
                      {
                          "is_subscriber": true,
                          "relationship_to_subscriber": "Self",
                          "action": "Addition",
                          "action_reason": "Initial Enrollment",
                          "benefit_status": "Active",
                          "employment_status": "Full-Time Active Employee",
                          "subscriber_id": "${faker.datatype.number({
                            max: 1000000,
                          })}",
                          "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                          "member_id": "${faker.datatype.number({
                            max: 1000000,
                          })}",
                          "member_details": {
                              "last_name": "${faker.name.firstName()}",
                              "first_name": "${faker.name.lastName()}",
                              "middle_name": "",
                              "name_prefix": "",
                              "name_suffix": "",
                              "ssn": "447461111",
                              "home_phone": "6296183838",
                              "email": "${emailAddress}",
                              "addresses": [
                                  {
                                      "address_type": "Street",
                                      "address_1": "215 E Town St",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43215"
                                  },
                                  {
                                      "address_type": "Mailing",
                                      "address_1": "578 E Tulane Rd",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43202"
                                  }
                              ],
                              "birth_date": "2000-01-01",
                              "gender": "Male",
                              "marital_status": "Married"
                          },
                          "demographics_update_needed": false,
                          "policy": {
                              "policy_action": "Addition",
                              "tier_code": "FAM ",
                              "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                              "coverage_level": "Family",
                              "benefits_begin_date": "${moment().format(
                                'YYYY-MM-DD'
                              )}"
                          }
                      },
                      {
                          "is_subscriber": false,
                          "relationship_to_subscriber": "Spouse",
                          "action": "Addition",
                          "action_reason": "Initial Enrollment",
                          "benefit_status": "Active",
                          "employment_status": "Full-Time Active Employee",
                          "subscriber_id": "${faker.datatype.number({
                            max: 1000000,
                          })}",
                          "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                          "member_id": "334387764",
                          "member_details": {
                              "last_name": "${faker.name.firstName()}",
                              "first_name": "${faker.name.lastName()}",
                              "middle_name": "spouse",
                              "name_prefix": "",
                              "name_suffix": "",
                              "ssn": "447462222",
                              "home_phone": "6296183838",
                              "addresses": [
                                  {
                                      "address_type": "Street",
                                      "address_1": "215 E Town St",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43215"
                                  },
                                  {
                                      "address_type": "Mailing",
                                      "address_1": "578 E Tulane Rd",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43202"
                                  }
                              ],
                              "birth_date": "2000-01-01",
                              "gender": "Female"
                          },
                          "demographics_update_needed": false,
                          "policy": {
                              "policy_action": "Addition",
                              "tier_code": "FAM ",
                              "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                              "benefits_begin_date": "${moment().format(
                                'YYYY-MM-DD'
                              )}"
                          }
                      },
                      {
                          "is_subscriber": false,
                          "relationship_to_subscriber": "Child",
                          "action": "Addition",
                          "action_reason": "Initial Enrollment",
                          "benefit_status": "Active",
                          "employment_status": null,
                          "subscriber_id": "${faker.datatype.number({
                            max: 1000000,
                          })}",
                          "group_number": "aso-grp-e4FrKdbTUpU8jA23Mzbj9i0Ql5OsEz",
                          "member_id": "334387765",
                          "member_details": {
                              "last_name": "${faker.name.firstName()}",
                              "first_name": "${faker.name.lastName()}",
                              "middle_name": "child",
                              "name_prefix": "",
                              "name_suffix": "",
                              "ssn": "334387765",
                              "home_phone": "6296183838",
                              "addresses": [
                                  {
                                      "address_type": "Street",
                                      "address_1": "215 E Town St",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43215"
                                  },
                                  {
                                      "address_type": "Mailing",
                                      "address_1": "578 E Tulane Rd",
                                      "city": "Columbus",
                                      "state": "OH",
                                      "zip_code": "43202"
                                  }
                              ],
                              "birth_date": "2004-01-01",
                              "gender": "Female"
                          },
                          "demographics_update_needed": false,
                          "policy": {
                              "policy_action": "Addition",
                              "tier_code": "FAM ",
                              "benefit_package_code": "SHIC_SIDECAR_2022_1400",
                              "benefits_begin_date": "${moment().format(
                                'YYYY-MM-DD'
                              )}"
                          }
                      }
                  ],
                  "metadata": {
                      "source_file_location": "s3://sidecar-aso-enrollment-edi-ease-qa/files_by_month/2022-05/0001_Init_Enrol_Sub_Spouse_Child_GFI.txt",
                      "ingested_by_sidecar_at": "2022-05-23 21:03:43.351975",
                      "file_received_from": "Ease"
                  }
              }
          ]`
        );
    }
  },
};

export default asoSubscriber;
