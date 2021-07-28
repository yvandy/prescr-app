import * as React from "react";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button, DatePicker, Form, Input, InputNumber, Select, Upload } from "antd";
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
            name="patientName" //ToDo:  fetch from props
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
