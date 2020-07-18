import React, { useState } from "react";
// import axios from "axios";

import axiosWithAuth from '../utils/AxiosWithAuth';
// import {useHistory} from 'react-router-dom';
import {Button,Icon, Label, Input, Header} from 'semantic-ui-react';

const initialColor = {
  color: "",
  code: { hex: "" }
};


const ColorList = ({ colors, updateColors,fetchColors }) => {
  // console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  // const {push} = useHistory();

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`,colorToEdit)
      .then((res)=>{
        let copy = [...colors];
        copy[colorToEdit.id] = res.data;
        updateColors(copy);
        console.log(res.status,res.statusText,"Change Saved!");
      })
      .catch((err)=>console.error(err));
  };

  const deleteColor = color => {
    // make a delete request to delete this color

    axiosWithAuth()
      .delete(`/colors/${color.id}`,color)
      .then((res)=>{
          // updateColors(res.data);
          console.log(res.status,res.statusText,"DELETED!");
          fetchColors();
      })
      .catch((err)=>console.error(err));
  };

  return (
    <div className="colors-wrap">
      <Header as='h3' icon>
        <Icon name='eye dropper' />
        Colors
      </Header>
      <ul>

        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                <Icon name='cancel' />
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}

      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <Header as='h4'>edit color</Header>
          <Label htmlFor='color'>
            color name:{" "}
            <Input
            name='color'
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </Label>
          <Label htmlFor='hex'>
            hex code:{" "}
            <Input
              name='hex'
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
              />
            </Label>
          <div className="button-row">
            <Button type="submit" color='blue' icon>
              <Icon name='save'/>
              save</Button>
            <Button onClick={() => setEditing(false)} icon color='grey'>
              <Icon name='cancel'/>
              cancel</Button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
