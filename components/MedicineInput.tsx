import * as React from "react";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Form, Input, InputNumber, Select } from "antd";
import { useCallback, useEffect, useState } from "react";

function MedicineInput_(
    props: any,
    ref: HTMLElementRefOf<"div">
) {
    const [medicineData, setMedicineData] = useState([]);
    const [error, setError] = useState(null);

    const fetchFoodData = useCallback(async () => {

        try {
            const response = await fetch('https://prescription-app-84502-default-rtdb.firebaseio.com/medicines.json');
            console.log(response);
            if (!response.ok) {
                throw Error('Something went wrong !');
            }
            const data = await response.json();
            const loadedData: any = [];
            for (const key in data) {
                loadedData.push({
                    id: key,
                    label: data[key].name,
                    value: data[key].name
                })
            }
            console.log(loadedData);
            setMedicineData(loadedData);
        } catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect(() => {
        fetchFoodData().catch((error) => {
            setError(error.message);
        });
    }, []);

    const { Option } = Select;
    return (
        <Form.Item className={props.className}
            label={props.label}
            name="medicineInput"
        >
            <Input.Group compact>
                <Select defaultValue="Medication" style={{ width: '60%' }} options={medicineData}>
                </Select>
                <InputNumber style={{ width: '40%' }} placeholder="Dosage" />
            </Input.Group>
        </Form.Item>

    )
}

const MedicineInput = React.forwardRef(MedicineInput_);
export default MedicineInput;
