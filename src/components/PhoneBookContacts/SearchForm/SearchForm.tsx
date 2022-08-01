import { FormFind, Label, Input, Span } from "./SearchForm.styled";

function SearchForm() {
  return (
    <FormFind>
      <Label htmlFor="search">Finde contact by name</Label>
      <Input
        id="search"
        // onChange={onChange}
        // value={value}
        type="search"
        pattern=".*\S.*"
        required
      />
      <Span className="caret"></Span>
    </FormFind>
  );
}

export default SearchForm;
