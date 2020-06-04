import * as React from 'react';
//import { useMediaQuery } from '@material-ui/core';
import { Create, FormTab, SelectInput, TabbedForm, TextInput,
  required, minLength, maxLength, minValue, maxValue, number, regex, email, choices,
  Datagrid, List, ReferenceField,  TextField,
  SaveButton, Toolbar } from 'react-admin';
//import { withStyles } from '@material-ui/core';

/*const styles = {
    inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
};*/

const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <span variant="body1">
            Any warnings or communications can be displayed here
        </span>
    </div>
);

const VetCreateToolbar = props => (
    <Toolbar {...props} >
        <SaveButton
            label="Apply"
            redirect="show"
            submitOnEnter={true}
        />
        <SaveButton
            label="Apply and repeat"
            redirect={false}
            submitOnEnter={false}
        />
    </Toolbar>
);

const validateLength = [required(), minLength(2), maxLength(15)];
const validateID = [required(), minLength(13), maxLength(13)];
const validateEmail = [required(), email()];
const validateAge = [required(), number(), minValue(18)];
const validateCode = regex(/^\d{4}$/, 'Must be a valid Postcode');
const validateSex = choices(['M', 'F'], 'Must be Male or Female');
const validateGross = [required(), minValue(1000)];
const validateInstal = [required(), minValue(100)];
const validateNumber = number();
const validateBureauScore = [number(), minValue(0), maxValue(1000)];

export const VetCreate = (props) => (
  <Create title="Credit Application" aside={<Aside />} {...props}>
    <TabbedForm toolbar={<VetCreateToolbar />} redirect="show">
      <FormTab label="applicant">
        <TextInput label="Vet Ref No." defaultValue={'vet001'} source="VettingRef" validate={validateLength} />
        <TextInput label="First Name" defaultValue={'John'} source="FirstName" validate={validateLength} />
        <TextInput label="Surname" defaultValue={'Doe'} source="Surname" validate={validateLength} />
        <TextInput label="RSA ID Number" defaultValue={1234567890987} source="IDNumber" validate={validateID} />
        <SelectInput label="Sex" defaultValue={'M'} source="sex" choices={[
            { id: 'M', name: 'Male' },
            { id: 'F', name: 'Female' },
        ]} validate={validateSex}/>
        <TextInput label="Age of Applicant" defaultValue={23} source="ApplicantAge" validate={validateAge} />
        <TextInput label="Business Partner" defaultValue={''} source="BusinessPartner" />
        <TextInput label="Sales Person" defaultValue={'Thor'} source="SalesPerson" validate={validateLength} />
        <TextInput label="Cell Phone Number" defaultValue={'012345'} source="CellNumber" validate={validateLength} />
        <TextInput label="Email Address" defaultValue={'email@email.com'} source="Email" validate={validateEmail} />
      </FormTab>
      <FormTab label="bureau">
        <TextInput label="Bureau Score" defaultValue={678} source="BureauScore" validate={validateBureauScore} />
        <TextInput label="Gross Monthly Income" defaultValue={10000} source="GrossMonthlyIncome" validate={validateGross} />
        <TextInput label="Total Monthly Instalment" defaultValue={1000} source="TotalMonthlyInstalment" validate={validateInstal} />
        <TextInput label="Home Postcode" defaultValue={'2345'} source="HomePostCode" validate={validateCode} />
        <TextInput label="Number of Properties" defaultValue={1} source="NumProperties" validate={validateNumber} />
        <TextInput label="Number of Companies" defaultValue={3} source="NumCompanies" validate={validateNumber} />
      </FormTab>
    </TabbedForm>
  </Create>
);

export const VetList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField label="Vet Ref" source="id" reference="vets">
        <TextField source="VettingRef" />
      </ReferenceField>
      <TextField label="Vet Ref No." source="VettingRef" />
      <TextField label="First Name" source="FirstName" />
      <TextField label="Surname" source="Surname" />
      <TextField label="RSA ID Number" source="IDNumber" />
      <TextField label="Sales Person" source="SalesPerson" />
    </Datagrid>
  </List>
);
