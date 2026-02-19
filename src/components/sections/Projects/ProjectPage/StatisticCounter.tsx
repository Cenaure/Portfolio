"use client"

import {useEffect, useRef, useState} from "react";

export default function StatisticCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const started = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !started.current) {
					started.current = true;
					let start = 0;
					const step = value / 40;
					const timer = setInterval(() => {
						start += step;
						if (start >= value) {
							setCount(value);
							clearInterval(timer);
						} else {
							setCount(Math.floor(start));
						}
					}, 30);
				}
			},
			{ threshold: 0.5 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [value]);

	return (
		<div ref={ref} className="text-center">
			<div className="text-5xl font-bold text-white font-mono tabular-nums">
				{count}
				{suffix}
			</div>
			<div className="mt-2 text-sm text-slate-400 uppercase tracking-widest">{label}</div>
		</div>
	);
}
