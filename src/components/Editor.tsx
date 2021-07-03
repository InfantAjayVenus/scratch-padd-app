import React from "react";

export class Editor extends React.Component {

  render() {
    return (
      <div className="w-full h-64 my-4 bg-paddBlueLight text-paddBlack">
        <div className="h-auto" contentEditable={true} id="editor" />
        <div id="toolbar" />
      </div>
    );
  }
}
