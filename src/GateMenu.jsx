import React, { Component } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import "./style.css";
import Gate from "./Gate";

// This component is the menu to drag new gates from
class GateMenu extends Component {
  render() {
    return (
      <div className="gate-menu">
        <Droppable droppableId={uuid()} key={uuid()} direction="horizontal">
          {(provided, snapshot) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <span className="gate-wrapper">
                  <Draggable key={1} draggableId={"h"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="h"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={2} draggableId={"x"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="x"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={3} draggableId={"cnot"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="cnot"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={8} draggableId={"swap"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="swap"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={4} draggableId={"y"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="y"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={5} draggableId={"z"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="z"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={6} draggableId={"t"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="t"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
                <span className="gate-wrapper">
                  <Draggable key={7} draggableId={"s"} index={0}>
                    {(provided) => {
                      return (
                        <Gate
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          innerRef={provided.innerRef}
                          type="s"
                          options={this.props.options}
                        />
                      );
                    }}
                  </Draggable>
                </span>
              </div>
            );
          }}
        </Droppable>
      </div>
    );
  }
}

export default GateMenu;
