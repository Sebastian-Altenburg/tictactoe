const setupGrid = (() => {
    const myCanvas = document.querySelector("canvas");
    const ctx = myCanvas.getContext("2d");

    const { width, height } = myCanvas;

    for (let i = 0; i < 4; i += 1) {
        ctx.beginPath();
        if (i === 0) {
            ctx.moveTo(width / 3, 0);
            ctx.lineTo(width / 3, height);
        }
        if (i === 1) {
            ctx.moveTo((width * 2) / 3, 0);
            ctx.lineTo((width * 2) / 3, height);
        }
        if (i === 2) {
            ctx.moveTo(0, height / 3);
            ctx.lineTo(width, height / 3);
        }
        if (i === 3) {
            ctx.moveTo(0, (height * 2) / 3);
            ctx.lineTo(width, (height * 2) / 3);
        }
        ctx.lineWidth = 6;
        ctx.stroke();
    }

    const draw = () => {
        for (let i = 0; i < 4; i += 1) {
            ctx.beginPath();
            if (i === 0) {
                ctx.moveTo(width / 3, 0);
                ctx.lineTo(width / 3, height);
            }
            if (i === 1) {
                ctx.moveTo((width * 2) / 3, 0);
                ctx.lineTo((width * 2) / 3, height);
            }
            if (i === 2) {
                ctx.moveTo(0, height / 3);
                ctx.lineTo(width, height / 3);
            }
            if (i === 3) {
                ctx.moveTo(0, (height * 2) / 3);
                ctx.lineTo(width, (height * 2) / 3);
            }
            ctx.lineWidth = 6;
            ctx.stroke();
        }
    };

    return { draw };
})();

export default setupGrid;
