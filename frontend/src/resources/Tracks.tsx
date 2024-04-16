//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const TracksTitle = () => {
  const record = useRecordContext();
  return <span>Tracks {record ? `"${record.title}"` : ''}</span>;
};

export const TracksList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="artist" reference="Artists" />
      <TextField source="title" />
      <TextField source="genre" />
      <DateField source="releaseDate" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const TracksEdit = () => (
  <Edit title={<TracksTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="artist" reference="Artists" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="genre" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="releaseDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const TracksCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="artist" reference="Artists" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="genre" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="releaseDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="artist"
    label="artist"
    reference="Artists"
    alwaysOn
  />,
  ,
  ,
  ,
];