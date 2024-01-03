export default function guardrail(mathFunction) {
  const queue = [];
  const ans = mathFunction();
  if (typeof ans === "number") queue.push(ans);
  else queue.push(`${ans.name}: ${ans.message}`);

  queue.push("Guardrail was processed");
  return queue;
}
