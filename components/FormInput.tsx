import * as React from "react";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button, DatePicker, Form, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
export interface DefaultAntdFormInputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    className?: string;
}
interface AntdFormInputProps extends DefaultAntdFormInputProps { }

function AntdFormInput_(
    props: AntdFormInputProps,
    ref: HTMLElementRefOf<"div">
) {
    // Use PlasmicAntdFormInput to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicAntdFormInput are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all AntdFormInputProps here, but feel free
    // to do whatever works for you.

    let inputEle;
    switch (props.type) {

        case "number": {
            inputEle = <InputNumber />
            break;
        }
        case "date": {
            inputEle = <DatePicker format="YYYY-MM-DD HH:mm:ss" />
            break;
        }
        case "upload": {
            inputEle = <Upload>
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            break;
        }
        case "medication": {
            inputEle = <Input.Group compact>
                <Input style={{ width: '80%' }} placeholder="Medication" />
                <InputNumber style={{ width: '20%' }} placeholder="Dosage" />
            </Input.Group>
            break;
        }
        case "button": {
            inputEle = <Button type="primary" htmlType="submit">
                Submit
            </Button>
            break;
        }
        default: {
            inputEle = <Input />
            break;
        }
    }
    return (

        <Form.Item className={props.className}
            label={props.label}
            wrapperCol={props.type == "button" ? { offset: 8, span: 16 } : {}}
            name="patientName"
            rules={[
                {
                    required: true,
                    message: 'Please input your patient name!',
                },
            ]}
        >
            {inputEle}
        </Form.Item>

    )
}

const AntdFormInput = React.forwardRef(AntdFormInput_);
export default AntdFormInput;
