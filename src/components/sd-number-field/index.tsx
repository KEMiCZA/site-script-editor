import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { TreeItem, changeNodeAtPath } from 'react-sortable-tree';
import './sd-number-field.css';

interface ISDTextFieldProps {
    node: TreeItem;
    path: string[] | number[];
    setTreeAndScriptData: (treeData: TreeItem[]) => void;
    treeData: TreeItem[];
    label: string;
    simple?: boolean;
    fieldName: string;
}

export default function SDNumberField(props: ISDTextFieldProps) {
    var getNodeKey = ({ treeIndex }: any) => treeIndex;
    var { node, path, setTreeAndScriptData, treeData, label } = props;
    var simpleClass = props.simple ? "sd_site_hierarchy_edit_field_simple" : "";
    return <TextField
        onChanged={fieldValue => {
            var newNode = { ...node };
            newNode.data[props.fieldName] = fieldValue;
            setTreeAndScriptData(changeNodeAtPath({
                treeData,
                path,
                getNodeKey,
                newNode
            }));
        }}
        borderless={true}
        value={props.node.data[props.fieldName]}
        className={'sd_site_hierarchy_field sd_site_hierarchy_edit_field ' + simpleClass}
        label={label} />;
}