import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useReducer, useRef, useCallback } from "react";

type AnimationState =
  | "play"
  | "pause"
  | "resume"
  | "reverse"
  | "seek"
  | "progress"
  | "timeScale"
  | "kill"
  | "restart";

type Action = { type: AnimationState };

const reducer = (state: AnimationState, action: Action): AnimationState => {
  return action.type;
};

const Control = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween>(null);
  const [state, dispatch] = useReducer(reducer, "play");

  useGSAP(
    () => {
      animation.current = gsap.to(boxRef.current, {
        x: 200,
        duration: 2,
        paused: true,
        onComplete: () => {
          console.log("动画完成");
        },
        onStart: () => {
          console.log("动画开始");
        },
        onUpdate: () => {
          console.log("动画更新");
        },
        onRepeat: () => {
          console.log("动画重复");
        },
        onRestart: () => {
          console.log("动画重新播放");
        },
        onReverseComplete: () => {
          console.log("动画撤销完成");
        },
      });
    },
    { scope: boxRef }
  );

  useGSAP(() => {
    if (!animation.current) return;

    switch (state) {
      case "play":
        animation.current.play();
        break;
      case "pause":
        animation.current.pause();
        break;
      case "resume":
        animation.current.resume();
        break;
      case "reverse":
        animation.current.reverse();
        break;
      case "seek":
        animation.current.seek(0.5);
        break;
      case "progress":
        animation.current.progress(0.25);
        break;
      case "timeScale":
        animation.current.timeScale(2);
        break;
      case "kill":
        animation.current.kill();
        break;
      case "restart":
        animation.current.restart();
        break;
    }
  }, [state]);

  const createClickHandler = useCallback(
    (type: AnimationState) => () => dispatch({ type }),
    []
  );

  const actions: { type: AnimationState; label: string }[] = [
    { type: "play", label: "播放：play()" },
    { type: "restart", label: "重新播放：restart()" },
    { type: "pause", label: "暂停：pause()" },
    { type: "resume", label: "恢复：resume()" },
    { type: "reverse", label: "撤销：reverse()" },
    { type: "seek", label: "跳转到0.5秒处：seek(0.5)" },
    { type: "progress", label: "挑战到进度1/4处：progress(0.25)" },
    { type: "timeScale", label: "控制速度：timeScale(2)" },
    { type: "kill", label: "终止：kill()" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">控制方法</h1>
      <ul>
        {actions.map(({ type, label }) => (
          <li
            key={type}
            onClick={createClickHandler(type)}
            className="cursor-pointer"
          >
            {label}
          </li>
        ))}
      </ul>
      <div
        ref={boxRef}
        className="control-box w-10 h-10 rounded-md bg-amber-700"
      ></div>
    </div>
  );
};

export default Control;
