import { ActionPanel, Action, Form, Icon } from "@raycast/api";
import { useRef, useState } from "react";
import { data } from "./utils/data";
import { MeasureTimeEnum } from "./utils/enum";
import { secondsConverter } from "./utils/seconds";

export default function Command() {
  const dropdownRef = useRef<Form.Dropdown>(null);
  const [typeFrom, setTypeFrom] = useState<string>("");
  const [typeTo, setTypeTo] = useState<string>("");

  const [valueFrom, setValueFrom] = useState<number>(0);

  const [result, setResult] = useState<number>(0);

  function convertValues(){
    if(typeFrom === MeasureTimeEnum.SECOND){
      const value = secondsConverter(typeTo, valueFrom);
      setResult(value);
    }
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action
            title="Convert Unit"
            icon={Icon.Calculator}
            onAction={() => convertValues()}
          />
          <Action.CopyToClipboard
            title="Copy Result"
            content={String(result)}
            icon={Icon.CopyClipboard} 
          />
        </ActionPanel>
      }
    >
      <Form.Dropdown id="dropdown_from" onChange={(value) => setTypeFrom(value)} value={typeFrom} ref={dropdownRef} title="Type from:" >
        {data.map((item, index) => {
          return <Form.Dropdown.Item value={item.title} title={item.title} key={index}/>;
        })}
      </Form.Dropdown>
      <Form.Dropdown id="dropdown_to" title="Type to:" onChange={(text) => setTypeTo(text)} value={typeTo}>
        {data.map((item, index) => {
          return <Form.Dropdown.Item value={item.title} title={item.title} key={index}/>;
        })}
      </Form.Dropdown>
      <Form.Separator/>
      <Form.TextField 
        id="textField" 
        placeholder="enter a value" 
        title="Value From:" 
        value={String(valueFrom)}
        onChange={(value: string) => setValueFrom(Number(value))}
      />
      <Form.Separator/>
      <Form.Description text={String(result)} title="Result"/>
    </Form>
  )
  ;
}
