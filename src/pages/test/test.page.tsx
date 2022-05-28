import { DynamicPage } from "@ui5/webcomponents-react";
import { useState } from "react";
import FormWrapper from "../../wrappers/form/form.wrapper";
import "./test.page.css";

function Test() {
  const [value, setValue] = useState<any>({
    name: "",
    id: 0,
    date: "12-04-2022",
    dateRange: "",
  });

  return (
    <DynamicPage headerContentPinnable={false} showHideHeaderButton={false}>
      {`name: ${value.name}`}
      <br />
      {`id: ${value.id}`}
      <br />
      {`date: ${value.date}`}
      <br />
      {`dateRange: ${value.dateRange}`}
      <br />
      <FormWrapper
        titleText={"Form Wrapper"}
        subGroups={[
          {
            titleText: "Form Subgroup Wrapper",
            elements: [
              {
                label: "Input",
                child: {
                  type: "Input",
                  properties: {
                    value: value.name,
                    object: value,
                    setter: setValue,
                    attribute: "name",
                    type: "Text",
                    icon: "add",
                  },
                },
              },
            ],
          },
          {
            titleText: "Form Subgroup Wrapper",
            elements: [
              {
                label: "Combobox",
                child: {
                  type: "ComboBox",
                  properties: {
                    value: value.id,
                    object: value,
                    setter: setValue,
                    attribute: "id",
                    validator: value.id.toString() !== "0",
                    data: [{ id: 1, content: "Guillermo" }],
                  },
                },
              },
            ],
          },
          {
            titleText: "Form Subgroup Wrapper",
            elements: [
              {
                label: "Date Picker",
                child: {
                  type: "DatePicker",
                  properties: {
                    value: value.date,
                    object: value,
                    setter: setValue,
                    attribute: "date",
                    validator: value.date.toString() !== "",
                  },
                },
              },
              {
                label: "Date Range Picker",
                child: {
                  type: "DateRangePicker",
                  properties: {
                    value: value.dateRange,
                    object: value,
                    setter: setValue,
                    attribute: "dateRange",
                  },
                },
              },
              {
                label: "Button",
                child: {
                  type: "Button",
                  properties: {
                    text: "Click Me!",
                    action: () => console.log("[FLAG]"),
                    design: "Emphasized",
                    icon: "create",
                  },
                },
              },
            ],
          },
        ]}
      />
    </DynamicPage>
  );
}

export default Test;
