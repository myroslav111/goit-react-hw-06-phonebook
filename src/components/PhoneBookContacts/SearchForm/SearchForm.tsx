import { FormFind, Label, Input, Span } from "./SearchForm.styled";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

function SearchForm(props: any) {
  return (
    <FormFind>
      <Label htmlFor="search">Finde contact by name</Label>
      <Input
        id="search"
        onChange={props.onChange}
        value={props.value}
        type="search"
        pattern=".*\S.*"
        required
      />
      <Span className="caret"></Span>
    </FormFind>
  );
}

const mapStatetoProps = (state: any) => ({
  value: state.contact.filterData,
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
    dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SearchForm);
