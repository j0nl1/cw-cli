import { Argument, Command } from "commander";

export default (cmd: Command & { _name: string; _aliases: string[]; _args: Argument[] }) => {
  const args = cmd._args
    .map((arg: Argument) => {
      const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");

      return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
    })
    .join(" ");
  return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (args ? " " + args : "");
};
