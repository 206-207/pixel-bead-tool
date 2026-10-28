(function () {
  'use strict';

  /* ============================== 内置 Perler 拼豆色板（94 色） ============================== */

  var PERLER_PALETTE = [
    // ---- 中性 ----
    { code: 'P01', name: '白色',     hex: '#FFFFFF' },
    { code: 'P02', name: '浅灰',     hex: '#C6C6C6' },
    { code: 'P03', name: '中灰',     hex: '#8C8C8C' },
    { code: 'P04', name: '深灰',     hex: '#4A4A4A' },
    { code: 'P05', name: '黑色',     hex: '#1F1F1F' },
    // ---- 红粉 ----
    { code: 'P06', name: '正红',     hex: '#BE1E2D' },
    { code: 'P07', name: '深红',     hex: '#8E2340' },
    { code: 'P08', name: '玫红',     hex: '#C13A8C' },
    { code: 'P09', name: '热粉',     hex: '#F15A9B' },
    { code: 'P10', name: '浅粉',     hex: '#F6A9C6' },
    { code: 'P11', name: '覆盆子',   hex: '#A92E5C' },
    // ---- 橙黄 ----
    { code: 'P12', name: '橙',       hex: '#F58220' },
    { code: 'P13', name: '橘黄',     hex: '#FDBB30' },
    { code: 'P14', name: '黄',       hex: '#FEF200' },
    { code: 'P15', name: '浅黄',     hex: '#FDF3A7' },
    { code: 'P16', name: '奶油糖',   hex: '#E8A33D' },
    { code: 'P17', name: '锈红',     hex: '#A64B2A' },
    // ---- 绿 ----
    { code: 'P18', name: '猕猴桃绿', hex: '#B5CC18' },
    { code: 'P19', name: '浅绿',     hex: '#A8D5A2' },
    { code: 'P20', name: '薄荷',     hex: '#9FE2BF' },
    { code: 'P21', name: '正绿',     hex: '#00A651' },
    { code: 'P22', name: '深绿',     hex: '#006B3F' },
    // ---- 蓝 ----
    { code: 'P23', name: '松石绿',   hex: '#00B2A9' },
    { code: 'P24', name: '天蓝',     hex: '#7CC7E8' },
    { code: 'P25', name: '浅蓝',     hex: '#A3CFE8' },
    { code: 'P26', name: '正蓝',     hex: '#0057A8' },
    { code: 'P27', name: '深蓝',     hex: '#003865' },
    { code: 'P28', name: '长春花蓝', hex: '#8A9BD4' },
    // ---- 紫 ----
    { code: 'P29', name: '薰衣草',   hex: '#C4A7D7' },
    { code: 'P30', name: '紫',       hex: '#7A3E9D' },
    { code: 'P31', name: '梅子紫',   hex: '#6C2E5F' },
    // ---- 棕肤 ----
    { code: 'P32', name: '奶油',     hex: '#F5EBD7' },
    { code: 'P33', name: '桃肤',     hex: '#FBC4A0' },
    { code: 'P34', name: '浅棕褐',   hex: '#D9B48F' },
    { code: 'P35', name: '驼棕',     hex: '#A67C52' },
    { code: 'P36', name: '棕',       hex: '#7B4B2A' },
    { code: 'P37', name: '深棕',     hex: '#4A2C1A' },
    // ---- 补位常用 ----
    { code: 'P38', name: '腮红粉',   hex: '#F2A7A0' },
    { code: 'P39', name: '雾蓝灰',   hex: '#7A8B99' },
    { code: 'P40', name: '橄榄绿',   hex: '#6B7C3A' },
    { code: 'P41', name: '酒红',     hex: '#7A1E2B' },
    { code: 'P42', name: '芥末黄',   hex: '#D9A51F' },
    { code: 'P43', name: '湖蓝',     hex: '#4FA8C9' },
    { code: 'P44', name: '藕紫',     hex: '#9B7BA6' },
    { code: 'P45', name: '米灰',     hex: '#B8AEA0' },
    { code: 'P46', name: '咖啡',     hex: '#5C3A24' },
    { code: 'P47', name: '珊瑚橙',   hex: '#F08060' },
    { code: 'P48', name: '石墨黑',   hex: '#2E2A28' },
    // ---- 扩充：肤色 / 中间调 / 暗部（提升照片适配） ----
    { code: 'P49', name: '沙色',     hex: '#E9D9B8' },
    { code: 'P50', name: '驼色',     hex: '#C89B6B' },
    { code: 'P51', name: '蜂蜜',     hex: '#E3B778' },
    { code: 'P52', name: '姜褐',     hex: '#8B5E3C' },
    { code: 'P53', name: '裸粉',     hex: '#F2C4B3' },
    { code: 'P54', name: '三文鱼',   hex: '#F2927C' },
    { code: 'P55', name: '火烈鸟',   hex: '#F78FA8' },
    { code: 'P56', name: '泡泡粉',   hex: '#F9D3D9' },
    { code: 'P57', name: '浅珊瑚',   hex: '#F9A08F' },
    { code: 'P58', name: '亮珊瑚',   hex: '#F25C54' },
    { code: 'P59', name: '番茄红',   hex: '#E2383F' },
    { code: 'P60', name: '茜红',     hex: '#C42B4A' },
    { code: 'P61', name: '栗棕',     hex: '#6E3B2E' },
    { code: 'P62', name: '黑巧克力', hex: '#2E1B12' },
    { code: 'P63', name: '雾玫瑰',   hex: '#C48B9B' },
    { code: 'P64', name: '枯玫瑰',   hex: '#B76E79' },
    { code: 'P65', name: '紫丁香',   hex: '#D9C7E8' },
    { code: 'P66', name: '紫罗兰',   hex: '#9457A8' },
    { code: 'P67', name: '深紫',     hex: '#4A2B5C' },
    { code: 'P68', name: '靛蓝',     hex: '#37479D' },
    { code: 'P69', name: '海军蓝',   hex: '#00263A' },
    { code: 'P70', name: '牛仔蓝',   hex: '#3D5A80' },
    { code: 'P71', name: '灰蓝',     hex: '#6E8CA0' },
    { code: 'P72', name: '冰川蓝',   hex: '#C7D3E8' },
    { code: 'P73', name: '鸟蛋青',   hex: '#A5DBDB' },
    { code: 'P74', name: '孔雀蓝',   hex: '#007B8A' },
    { code: 'P75', name: '深湖绿',   hex: '#00554F' },
    { code: 'P76', name: '鹦鹉绿',   hex: '#7DC242' },
    { code: 'P77', name: '亮绿',     hex: '#5BBD5B' },
    { code: 'P78', name: '三叶草',   hex: '#008752' },
    { code: 'P79', name: '森林绿',   hex: '#004B35' },
    { code: 'P80', name: '苔绿',     hex: '#8A9A5B' },
    { code: 'P81', name: '鼠尾草',   hex: '#B2BBA8' },
    { code: 'P82', name: '石板灰',   hex: '#5B6770' },
    { code: 'P83', name: '银灰',     hex: '#B9BDC1' },
    { code: 'P84', name: '米色',     hex: '#E8CFA8' },
    // ---- 二次元补位：浅色调分层 / 瞳色 / 发饰色 ----
    { code: 'P85', name: '象牙白',   hex: '#F7F1E8' },
    { code: 'P86', name: '米白灰',   hex: '#EDE7DE' },
    { code: 'P87', name: '暖沙',     hex: '#E0D2BF' },
    { code: 'P88', name: '淡紫灰',   hex: '#C9C4DA' },
    { code: 'P89', name: '雾紫',     hex: '#A9A2C2' },
    { code: 'P90', name: '天青蓝',   hex: '#8FB8DE' },
    { code: 'P91', name: '湖蓝',     hex: '#4A87C4' },
    { code: 'P92', name: '深靛蓝',   hex: '#1F3F6E' },
    { code: 'P93', name: '眼线棕',   hex: '#4F3B32' },
    { code: 'P94', name: '暖褐灰',   hex: '#8A7A6E' }
  ];

  var FONT = '"PingFang SC","Microsoft YaHei","Noto Sans SC",system-ui,sans-serif';

  /* ============================== 颜色工具：hex / Lab / 色差 ============================== */

  function hex2rgb(hex) {
    return [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16)
    ];
  }

  function rgb2lab(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    var x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    function f(t) { return t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116; }
    var fx = f(x), fy = f(y), fz = f(z);
    return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
  }

  // 预计算色板 Lab，避免每次映射重复换算
  var PALETTE_LAB = PERLER_PALETTE.map(function (c) {
    var rgb = hex2rgb(c.hex);
    return rgb2lab(rgb[0], rgb[1], rgb[2]);
  });

  // CIE76 ΔE：Lab 空间欧氏距离
  function deltaE(lab1, lab2) {
    var dl = lab1[0] - lab2[0], da = lab1[1] - lab2[1], db = lab1[2] - lab2[2];
    return dl * dl + da * da + db * db;
  }

  function nearestPaletteIndex(r, g, b) {
    var lab = rgb2lab(r, g, b);
    var best = 0, bestD = Infinity;
    for (var i = 0; i < PALETTE_LAB.length; i++) {
      var d = deltaE(lab, PALETTE_LAB[i]);
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  }

  /* ============ M2 · 直方图选色 & 色板映射模块 ============ */

  /* ---- 预处理工具：量化前轻度提升对比度 + 饱和度，抵消色板偏灰 ---- */

  function rgb2hsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h /= 6;
    }
    return [h, s, l];
  }

  function hsl2rgb(h, s, l) {
    if (s === 0) {
      var v = Math.round(l * 255);
      return [v, v, v];
    }
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    return [
      Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
      Math.round(hue2rgb(p, q, h) * 255),
      Math.round(hue2rgb(p, q, h - 1 / 3) * 255)
    ];
  }

  function clamp255(v) { return v < 0 ? 0 : v > 255 ? 255 : v; }

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  // 画面色调自检：淡彩插画 / 白底线稿的明度几乎全挤在近白区间，
  // 直接量化会糊成一片奶油色，五官与发色全部塌陷。
  // 只有这种"高光占比大且整体彩度低"的画面才提对比 + 提饱和；
  // 正常照片算出来 gamma=1、sat=1，等于不做任何改变。
  function analyzeTone(data, W, H) {
    var n = W * H, high = 0, chromaSum = 0, counted = 0;
    for (var i = 0; i < n; i++) {
      var o = i * 4;
      var r = data[o], g = data[o + 1], b = data[o + 2];
      var lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum >= 250) continue; // 纯白背景不计入统计
      counted++;
      if (lum > 225) high++;
      var mx = Math.max(r, g, b);
      chromaSum += mx > 0 ? (mx - Math.min(r, g, b)) / mx : 0;
    }
    if (!counted) return { gamma: 1, sat: 1 };
    var highKey = high / counted;
    var chroma = chromaSum / counted;
    return {
      gamma: 1 + 0.32 * clamp01((highKey - 0.08) / 0.30),
      sat: 1 + 0.55 * clamp01((0.22 - chroma) / 0.15)
    };
  }

  // 统一色调预处理：按 tone 曲线拉开浅色层次，再抬低饱和色
  function prepColor(r, g, b, tone) {
    r = clamp255(255 * Math.pow(clamp01(r / 255), tone.gamma));
    g = clamp255(255 * Math.pow(clamp01(g / 255), tone.gamma));
    b = clamp255(255 * Math.pow(clamp01(b / 255), tone.gamma));
    var hsl = rgb2hsl(r, g, b);
    hsl[1] = Math.min(1, hsl[1] * (hsl[1] < 0.30 ? tone.sat : 1.10));
    return hsl2rgb(hsl[0], hsl[1], hsl[2]);
  }

  /* ---- 取景：纯色边框检测 + 内容自适应裁切（避免角色被大片留白稀释） ---- */

  // 工作画布：长边压到 ≤640，白底合成（兼容透明 PNG，避免透明像素变黑）
  function makeAnalysisCanvas(img) {
    var w = img.naturalWidth, h = img.naturalHeight;
    var scale = Math.min(1, 640 / Math.max(w, h));
    var W = Math.max(1, Math.round(w * scale));
    var H = Math.max(1, Math.round(h * scale));
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, W, H);
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, W, H);
    return c;
  }

  // 外边框取样判定纯色背景；不是纯色背景则返回 null
  function detectBgColor(data, W, H) {
    var step = Math.max(1, Math.floor(Math.min(W, H) / 40));
    var picks = [];
    var x, y, o;
    for (x = 0; x < W; x += step) {
      o = x * 4; picks.push([data[o], data[o + 1], data[o + 2]]);
      o = ((H - 1) * W + x) * 4; picks.push([data[o], data[o + 1], data[o + 2]]);
    }
    for (y = 0; y < H; y += step) {
      o = y * W * 4; picks.push([data[o], data[o + 1], data[o + 2]]);
      o = (y * W + W - 1) * 4; picks.push([data[o], data[o + 1], data[o + 2]]);
    }

    var rs = [], gs = [], bs = [];
    picks.forEach(function (p) {
      if (p[0] + p[1] + p[2] < 6) return; // 透明像素跳过
      rs.push(p[0]); gs.push(p[1]); bs.push(p[2]);
    });
    if (!rs.length) return null;

    function median(arr) {
      arr.sort(function (a, b) { return a - b; });
      return arr[Math.floor(arr.length / 2)];
    }
    var bg = [median(rs), median(gs), median(bs)];
    var bgLab = rgb2lab(bg[0], bg[1], bg[2]);
    var near = 0;
    picks.forEach(function (p) {
      if (deltaE(rgb2lab(p[0], p[1], p[2]), bgLab) < 144) near++; // ΔE < 12
    });
    return near / picks.length >= 0.9 ? bg : null;
  }

  // 非背景像素包围盒 → 正方形取景区（限制在合理范围内，避免裁掉主体）
  function detectContentBox(data, W, H, bg) {
    var full = { x: 0, y: 0, size: Math.min(W, H) };
    if (!bg) return full;

    var bgLab = rgb2lab(bg[0], bg[1], bg[2]);
    var minX = W, minY = H, maxX = -1, maxY = -1;
    for (var y = 0; y < H; y++) {
      for (var x = 0; x < W; x++) {
        var o = (y * W + x) * 4;
        if (data[o + 3] < 20) continue;
        if (deltaE(rgb2lab(data[o], data[o + 1], data[o + 2]), bgLab) <= 196) continue; // ΔE ≤ 14
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < 0) return full;

    var bw = maxX - minX + 1, bh = maxY - minY + 1;
    var lim = Math.min(W, H);
    var size = Math.round(Math.max(bw, bh) * 1.05); // 略微外扩，保住贴边轮廓
    if (size > lim) size = lim;
    if (size < lim * 0.45) return full; // 主体占比过小，不裁，避免误判裁歪

    var cx = (minX + maxX + 1) / 2, cy = (minY + maxY + 1) / 2;
    var bx = Math.round(cx - size / 2), by = Math.round(cy - size / 2);
    bx = bx < 0 ? 0 : (bx + size > W ? W - size : bx);
    by = by < 0 ? 0 : (by + size > H ? H - size : by);
    return { x: bx, y: by, size: size };
  }

  /* ---- 墨线掩膜：暗于局部邻域均值的像素视为线条 ---- */

  // 用积分图算 O(1) 局部均值：细线呈"比周围明显更暗"的窄结构会被抓到，
  // 而柔和的明暗渐变差值很小，不会被误判成线条
  function buildInkMask(data, W, H) {
    var n = W * H;
    var lum = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      var o = i * 4;
      lum[i] = 0.299 * data[o] + 0.587 * data[o + 1] + 0.114 * data[o + 2];
    }

    var sw = W + 1;
    var sat = new Float64Array(sw * (H + 1));
    for (var y = 0; y < H; y++) {
      var rowSum = 0;
      for (var x = 0; x < W; x++) {
        rowSum += lum[y * W + x];
        sat[(y + 1) * sw + (x + 1)] = sat[y * sw + (x + 1)] + rowSum;
      }
    }

    var r = Math.max(2, Math.round(Math.min(W, H) * 0.005));
    var mask = new Uint8Array(n);
    for (var yy = 0; yy < H; yy++) {
      var y0 = yy - r < 0 ? 0 : yy - r;
      var y1 = yy + r + 1 > H ? H : yy + r + 1;
      for (var xx = 0; xx < W; xx++) {
        var x0 = xx - r < 0 ? 0 : xx - r;
        var x1 = xx + r + 1 > W ? W : xx + r + 1;
        var area = (y1 - y0) * (x1 - x0);
        var sum = sat[y1 * sw + x1] - sat[y0 * sw + x1] - sat[y1 * sw + x0] + sat[y0 * sw + x0];
        if (lum[yy * W + xx] < sum / area - 20) mask[yy * W + xx] = 1;
      }
    }
    return mask;
  }

  /* ---- 网格采样：填充色 / 线条色分离，墨线格取线条色 ---- */

  // 每格分别统计"线条像素"和"非线条像素"的颜色：
  // · 线条占比够 → 该格取线条色，1 格宽的轮廓在低分辨率下也立得住
  // · 否则取"剔除线条后"的填充色 —— 画面不被线条拉脏
  // 返回 N×N：{r,g,b, ink, imp, bg, idx}
  function sampleCells(data, W, box, N, inkMask) {
    var S = box.size;
    var cellPx = S / N;
    var cells = new Array(N * N);

    for (var cy = 0; cy < N; cy++) {
      var y0 = box.y + Math.floor(cy * cellPx);
      var y1 = box.y + Math.max(1, Math.floor((cy + 1) * cellPx));
      if (y1 > box.y + S) y1 = box.y + S;

      for (var cx = 0; cx < N; cx++) {
        var x0 = box.x + Math.floor(cx * cellPx);
        var x1 = box.x + Math.max(1, Math.floor((cx + 1) * cellPx));
        if (x1 > box.x + S) x1 = box.x + S;

        var fR = 0, fG = 0, fB = 0, fN = 0;   // 填充（非线条）像素
        var iR = 0, iG = 0, iB = 0, iN = 0;   // 线条像素
        var cnt = 0;                           // 格内像素总数

        for (var py = y0; py < y1; py++) {
          var rowOff = py * W;
          for (var px = x0; px < x1; px++) {
            var idx = rowOff + px;
            var o = idx * 4;
            var r = data[o], g = data[o + 1], b = data[o + 2];
            cnt++;
            if (inkMask[idx]) { iR += r; iG += g; iB += b; iN++; }
            else { fR += r; fG += g; fB += b; fN++; }
          }
        }
        if (!cnt) cnt = 1;

        var inkFrac = iN / cnt;
        var fr = fN ? fR / fN : (iN ? iR / iN : 255);
        var fg = fN ? fG / fN : (iN ? iG / iN : 255);
        var fb = fN ? fB / fN : (iN ? iB / iN : 255);

        cells[cy * N + cx] = {
          fR: fr, fG: fg, fB: fb, // 填充色（已剔除线条像素）
          ink: inkFrac,
          r: fr, g: fg, b: fb, imp: 0, bg: false, idx: -1
        };
      }
    }
    return cells;
  }

  /* ---- 线条分级着色：外轮廓强描边，内部线条温和加深 ---- */

  // 细线覆盖率只有 ~5–20%，若整格都取原始线条色会把 2px 的线放大成整格褐色斑块。
  // 因此线条不用"采样到的线条像素色"，而用"填充色的同色系深色版"：
  // 肤色描边得到暖褐、绿裤描边得到深绿，既干净又不脏。
  // 贴背景的轮廓格强描边（保证剪影清楚），内部按覆盖率温和加深。
  function applyInkStyle(cells, N, tone) {
    for (var y = 0; y < N; y++) {
      for (var x = 0; x < N; x++) {
        var c = cells[y * N + x];
        if (c.bg) continue;

        var isEdge = false;
        for (var dy = -1; dy <= 1 && !isEdge; dy++) {
          for (var dx = -1; dx <= 1; dx++) {
            var nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
            if (cells[ny * N + nx].bg) { isEdge = true; break; }
          }
        }

        var w;
        if (isEdge) w = c.ink > 0.02 ? 0.9 : 0;
        else if (c.ink >= 0.30) w = 0.85;
        else w = clamp01((c.ink - 0.06) / 0.16) * 0.5;

        var fill = prepColor(c.fR, c.fG, c.fB, tone);
        var r = fill[0] + (fill[0] * 0.55 - fill[0]) * w;
        var g = fill[1] + (fill[1] * 0.55 - fill[1]) * w;
        var b = fill[2] + (fill[2] * 0.55 - fill[2]) * w;

        // 外轮廓没检测到墨线时轻微压暗，保证浅色主体不与白底糊在一起
        if (isEdge && c.ink <= 0.02) { r *= 0.85; g *= 0.85; b *= 0.85; }

        r = clamp255(r); g = clamp255(g); b = clamp255(b);
        var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
        var csat = mx > 0 ? (mx - mn) / mx : 0;

        var imp = clamp01(0.90 * clamp01(c.ink / 0.12) + 0.10 * Math.min(1, csat * 2));
        if (isEdge) imp = Math.max(imp, 0.80);

        c.r = r; c.g = g; c.b = b;
        c.imp = imp;
      }
    }
  }

  // 背景扁平化：从边框向内洪泛，只吞并"低对比且接近背景色"的格子；
  // 线条与主体轮廓会自然阻断，不会把角色误当背景吃掉
  function flattenBackground(cells, N, bg) {
    if (!bg) return;
    var bgLab = rgb2lab(bg[0], bg[1], bg[2]);

    function markBg(i) {
      cells[i].bg = true;
      cells[i].imp = 0;
      cells[i].r = 255; cells[i].g = 255; cells[i].b = 255;
    }

    var visited = new Uint8Array(N * N);
    var queue = [];
    function push(i) {
      if (!visited[i]) { visited[i] = 1; queue.push(i); }
    }
    for (var i = 0; i < N; i++) {
      push(i); push((N - 1) * N + i); push(i * N); push(i * N + N - 1);
    }
    while (queue.length) {
      var qi = queue.shift();
      var cell = cells[qi];
      if (cell.ink > 0.04 || deltaE(rgb2lab(cell.r, cell.g, cell.b), bgLab) > 256) continue;
      markBg(qi);
      var x = qi % N, y = (qi - x) / N;
      if (x > 0) push(qi - 1);
      if (x < N - 1) push(qi + 1);
      if (y > 0) push(qi - N);
      if (y < N - 1) push(qi + N);
    }

    // 被背景整圈包围的零星杂点（JPEG 噪点 / 极细碎屑）一并并入背景，
    // 避免近看时白底上散落小黑点
    for (var y2 = 0; y2 < N; y2++) {
      for (var x2 = 0; x2 < N; x2++) {
        var i2 = y2 * N + x2;
        if (cells[i2].bg || cells[i2].ink >= 0.25) continue;
        var bgNeighbors = 0;
        for (var dy = -1; dy <= 1; dy++) {
          for (var dx = -1; dx <= 1; dx++) {
            if (!dy && !dx) continue;
            var ny = y2 + dy, nx = x2 + dx;
            if (ny < 0 || nx < 0 || ny >= N || nx >= N) continue;
            if (cells[ny * N + nx].bg) bgNeighbors++;
          }
        }
        if (bgNeighbors >= 7) markBg(i2);
      }
    }
  }

  /* ---- 特征优先选色：按“重要度加权颗数”合并，保护小面积关键色 ---- */

  // items: [{idx, count, weight, mandatory}]
  // 代价 = 加权颗数 × 到最近保留色的 ΔE；
  // 落在强边缘（五官线条 / 瞳色 / 配饰）上的色标为 mandatory，预算内优先保留
  function selectPalette(items, K) {
    var work = items.map(function (it) {
      return { idx: it.idx, count: it.count, weight: it.weight, mandatory: it.mandatory };
    });

    var protect = true;
    while (work.length > K) {
      var mand = 0;
      for (var q = 0; q < work.length; q++) if (work[q].mandatory) mand++;

      var minCost = Infinity, rmAt = -1, mAt = -1;
      for (var i = 0; i < work.length; i++) {
        var wi = work[i];
        if (protect && wi.mandatory && mand <= K) continue;
        var best = -1, bestD = Infinity;
        for (var j = 0; j < work.length; j++) {
          if (j === i) continue;
          var d = deltaE(PALETTE_LAB[wi.idx], PALETTE_LAB[work[j].idx]);
          if (d < bestD) { bestD = d; best = j; }
        }
        var cost = wi.weight * Math.sqrt(bestD);
        if (cost < minCost) { minCost = cost; rmAt = i; mAt = best; }
      }

      // 关键色数量本身超预算：解除保护，退化为按加权颗数合并
      if (rmAt < 0 && protect) { protect = false; continue; }
      if (rmAt < 0) break;

      work[mAt].weight += work[rmAt].weight;
      work[mAt].count += work[rmAt].count;
      work[mAt].mandatory = work[mAt].mandatory || work[rmAt].mandatory;
      work.splice(rmAt, 1);
    }
    return work.map(function (it) { return it.idx; });
  }

  // 全量管线：图片 + 参数 + 可选裁剪 → 共享结果（两模式共用它，不重复运算）
  function computeResult(img, N, K, crop) {
    var src = makeAnalysisCanvas(img);
    var W = src.width, H = src.height;
    var sctx = src.getContext('2d');
    var srcData = sctx.getImageData(0, 0, W, H).data;

    var bg = detectBgColor(srcData, W, H);
    var box;
    if (crop) {
      box = { x: crop.x, y: crop.y, size: crop.size };
    } else {
      box = detectContentBox(srcData, W, H, bg);
    }
    var tone = analyzeTone(srcData, W, H);

    var inkMask = buildInkMask(srcData, W, H);
    var cells = sampleCells(srcData, W, box, N, inkMask);
    flattenBackground(cells, N, bg);
    applyInkStyle(cells, N, tone);

    // 逐格映射最近拼豆色
    for (var i = 0; i < cells.length; i++) {
      cells[i].idx = nearestPaletteIndex(cells[i].r, cells[i].g, cells[i].b);
    }

    // 平场去噪：只在低重要度区做 3×3 众数合并，压掉细碎杂点；
    // 五官 / 线条 / 配饰所在的高重要度格子一格都不动
    var snapshot = cells.map(function (c) { return c.idx; });
    for (var cy = 0; cy < N; cy++) {
      for (var cx = 0; cx < N; cx++) {
        var ci = cy * N + cx;
        if (cells[ci].imp >= 0.22 || cells[ci].bg) continue;

        var tally = {};
        for (var dy = -1; dy <= 1; dy++) {
          for (var dx = -1; dx <= 1; dx++) {
            var nx = cx + dx, ny = cy + dy;
            if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
            var pIdx = snapshot[ny * N + nx];
            tally[pIdx] = (tally[pIdx] || 0) + 1;
          }
        }
        var bestIdx = snapshot[ci], bestCnt = tally[bestIdx] || 0;
        Object.keys(tally).forEach(function (key) {
          var cnt = tally[key];
          if (cnt > bestCnt) { bestCnt = cnt; bestIdx = parseInt(key, 10); }
        });
        if (bestCnt >= 5) cells[ci].idx = bestIdx;
      }
    }

    // 统计加权颗数 + 标记关键色
    // 背景白格必须留住：它占的颗数最多，一旦被合并成象牙白/米白，
    // 头像模式的白底就会变成米黄色，且角色浅色区会与底色贴近
    var counts = {}, weights = {}, mandatory = {};
    for (var i2 = 0; i2 < cells.length; i2++) {
      var c2 = cells[i2];
      counts[c2.idx] = (counts[c2.idx] || 0) + 1;
      weights[c2.idx] = (weights[c2.idx] || 0) + 1 + 9 * c2.imp;
      if (c2.imp >= 0.72) mandatory[c2.idx] = true;
      if (c2.bg) {
        mandatory[c2.idx] = true;
        weights[c2.idx] += 100000;
      }
    }

    var usedIdx = Object.keys(counts).map(function (key) { return parseInt(key, 10); });
    var items = usedIdx.map(function (idx) {
      return {
        idx: idx,
        count: counts[idx],
        weight: weights[idx],
        mandatory: !!mandatory[idx]
      };
    });

    var selected = items.length <= K ? usedIdx : selectPalette(items, K);
    var inSet = {};
    selected.forEach(function (idx) { inSet[idx] = true; });

    // 被淘汰的色 → 落到保留色中最接近的一个
    var remap = {};
    usedIdx.forEach(function (idx) {
      if (inSet[idx]) return;
      var best = selected[0], bestD = Infinity;
      for (var s = 0; s < selected.length; s++) {
        var d = deltaE(PALETTE_LAB[idx], PALETTE_LAB[selected[s]]);
        if (d < bestD) { bestD = d; best = selected[s]; }
      }
      remap[idx] = best;
    });

    var grid = [], finalCounts = {};
    for (var gy = 0; gy < N; gy++) {
      var row = [];
      for (var gx = 0; gx < N; gx++) {
        var pi = cells[gy * N + gx].idx;
        if (!inSet[pi]) pi = remap[pi];
        row.push(pi);
        finalCounts[pi] = (finalCounts[pi] || 0) + 1;
      }
      grid.push(row);
    }

    var usedColors = Object.keys(finalCounts).map(function (key) {
      var idx = parseInt(key, 10);
      var c = PERLER_PALETTE[idx];
      return { idx: idx, code: c.code, name: c.name, hex: c.hex, count: finalCounts[idx] };
    }).sort(function (a, b) { return b.count - a.count; });

    return { size: N, grid: grid, usedColors: usedColors };
  }

  /* ============ M3 · 双模式渲染模块（消费同一份 result） ============ */

  function luminance(hex) {
    var rgb = hex2rgb(hex);
    return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
  }

  // 模式 A：像素头像 —— 干净色块，无网格 / 无色号 / 无图例
  function renderAvatar(canvas, result) {
    var N = result.size, cell = N >= 96 ? 12 : 16;
    canvas.width = N * cell;
    canvas.height = N * cell;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var y = 0; y < N; y++) {
      for (var x = 0; x < N; x++) {
        ctx.fillStyle = PERLER_PALETTE[result.grid[y][x]].hex;
        ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }
  }

  // 模式 B：拼豆图纸 —— 细网格 + 格内编号 + 底部颜色对照表
  function renderPattern(canvas, result) {
    var N = result.size, cell = N >= 96 ? 20 : 26;
    var gw = N * cell, gh = N * cell;

    // 图例区布局
    var perRow = 6;
    var used = result.usedColors;
    var rows = Math.max(1, Math.ceil(used.length / perRow));
    var legendTop = gh + 18;
    var titleH = 30, rowH = 46, padBottom = 16;
    var legendH = titleH + rows * rowH + padBottom;

    canvas.width = gw;
    canvas.height = gh + 18 + legendH;
    var ctx = canvas.getContext('2d');

    // 白底
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 色块
    for (var y = 0; y < N; y++) {
      for (var x = 0; x < N; x++) {
        ctx.fillStyle = PERLER_PALETTE[result.grid[y][x]].hex;
        ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }

    // 细网格线（0.5 偏移保证 1px 锐利）
    ctx.strokeStyle = 'rgba(0,0,0,.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var i = 0; i <= N; i++) {
      ctx.moveTo(i * cell + 0.5, 0); ctx.lineTo(i * cell + 0.5, gh);
      ctx.moveTo(0, i * cell + 0.5); ctx.lineTo(gw, i * cell + 0.5);
    }
    ctx.stroke();

    // 格内两位数字编号，按底色亮度选黑 / 白字
    ctx.font = '9px ' + FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var cy = 0; cy < N; cy++) {
      for (var cx = 0; cx < N; cx++) {
        var hex = PERLER_PALETTE[result.grid[cy][cx]].hex;
        var num = PERLER_PALETTE[result.grid[cy][cx]].code.slice(1); // 'P06' → '06'
        ctx.fillStyle = luminance(hex) > 150 ? 'rgba(0,0,0,.72)' : 'rgba(255,255,255,.92)';
        ctx.fillText(num, cx * cell + cell / 2, cy * cell + cell / 2 + 0.5);
      }
    }

    // 底部颜色对照表
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#1C1917';
    ctx.font = '700 16px ' + FONT;
    ctx.fillText('颜色对照表', 16, legendTop + 20);

    var itemW = (gw - 32) / perRow;
    for (var t = 0; t < used.length; t++) {
      var col = t % perRow, row = Math.floor(t / perRow);
      var ix = 16 + col * itemW;
      var iy = legendTop + titleH + row * rowH;
      ctx.fillStyle = used[t].hex;
      ctx.fillRect(ix, iy, 26, 26);
      ctx.strokeStyle = 'rgba(0,0,0,.25)';
      ctx.strokeRect(ix + 0.5, iy + 0.5, 26, 26);
      ctx.fillStyle = '#1C1917';
      ctx.font = '13px ' + FONT;
      ctx.fillText(used[t].code + ' ' + used[t].name, ix + 34, iy + 11);
      ctx.fillStyle = '#78716C';
      ctx.font = '12px ' + FONT;
      ctx.fillText('× ' + used[t].count + ' 颗', ix + 34, iy + 26);
    }
  }

  /* ============ M1 · 图片上传 + 裁剪预览 + 生成 ============ */

  var fileInput = document.getElementById('fileInput');
  var uploadBtn = document.getElementById('uploadBtn');
  var uploadTitle = document.getElementById('uploadTitle');
  var uploadSub = document.getElementById('uploadSub');
  var sizeCards = Array.prototype.slice.call(document.querySelectorAll('.opt-card'));
  var colorChips = Array.prototype.slice.call(document.querySelectorAll('#colorChips .chip'));
  var modeBtns = Array.prototype.slice.call(document.querySelectorAll('#modeSeg button'));
  var autoCropBtn = document.getElementById('autoCropBtn');
  var generateBtn = document.getElementById('generateBtn');
  var downloadBtn = document.getElementById('downloadBtn');
  var cropActions = document.getElementById('cropActions');
  var resultActions = document.getElementById('resultActions');
  var reCropBtn = document.getElementById('reCropBtn');
  var downloadBtn2 = document.getElementById('downloadBtn2');
  var emptyBox = document.getElementById('emptyBox');
  var cropBox = document.getElementById('cropBox');
  var cropCanvas = document.getElementById('cropCanvas');
  var stage = document.getElementById('stage');
  var stageMeta = document.getElementById('stageMeta');

  var state = {
    image: null,            // 原始 Image
    analysisCanvas: null,   // 合成白底后的 canvas（长边 ≤640）
    analysisData: null,     // analysisCanvas 的 ImageData
    bg: null,               // detectBgColor 结果（复用）
    crop: null,             // 当前裁剪框 {x,y,size}（analysis 坐标）
    gridSize: 96,
    maxColors: 16,
    mode: 'avatar',
    result: null,
    error: ''
  };

  /* ---- 裁剪画布渲染 & 交互 ---- */

  // 把合成图等比缩放到裁剪画布的可视区域（留 4px padding），
  // 保留裁剪框在 analysis 坐标里的精度，显示时乘以 scale
  var cropView = { scale: 1, offsetX: 0, offsetY: 0 };

  function layoutCropCanvas() {
    var a = state.analysisCanvas;
    if (!a) return;
    var parent = cropBox;
    var maxW = Math.min(parent.clientWidth - 8, 560);
    var maxH = 520;
    var ar = a.width / a.height;
    var W = maxW, H = Math.round(maxW / ar);
    if (H > maxH) { H = maxH; W = Math.round(maxH * ar); }
    cropCanvas.width = W;
    cropCanvas.height = H;
    cropCanvas.style.width = W + 'px';
    cropCanvas.style.height = H + 'px';
    cropView.scale = W / a.width;
    cropView.offsetX = 0;
    cropView.offsetY = 0;
  }

  function renderCropCanvas() {
    var a = state.analysisCanvas, c = state.crop;
    if (!a || !c) return;
    layoutCropCanvas();
    var W = cropCanvas.width, H = cropCanvas.height;
    var ctx = cropCanvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, W, H);

    // 绘制等比缩放后的合成图
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(a, 0, 0, W, H);
    ctx.restore();

    // 裁剪框（CSS 像素）
    var x = c.x * cropView.scale;
    var y = c.y * cropView.scale;
    var s = c.size * cropView.scale;

    // 框外遮罩（半透明深灰）
    ctx.save();
    ctx.fillStyle = 'rgba(28, 25, 23, .42)';
    // 上
    ctx.fillRect(0, 0, W, y);
    // 下
    ctx.fillRect(0, y + s, W, H - (y + s));
    // 左
    ctx.fillRect(0, y, x, s);
    // 右
    ctx.fillRect(x + s, y, W - (x + s), s);
    ctx.restore();

    // 框内再描一层细白边，让内部更亮
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,.55)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1);
    ctx.restore();

    // 虚线外框
    ctx.save();
    ctx.strokeStyle = '#D97757';
    ctx.setLineDash([8, 6]);
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 1, y + 1, s - 2, s - 2);
    ctx.setLineDash([]);
    ctx.restore();

    // 四个角把手
    ctx.save();
    ctx.fillStyle = '#D97757';
    var k = 10;
    ctx.fillRect(x - k / 2, y - k / 2, k, k);
    ctx.fillRect(x + s - k / 2, y - k / 2, k, k);
    ctx.fillRect(x - k / 2, y + s - k / 2, k, k);
    ctx.fillRect(x + s - k / 2, y + s - k / 2, k, k);
    ctx.restore();
  }

  function cssPointToAnalysis(px, py) {
    return { x: px / cropView.scale, y: py / cropView.scale };
  }

  function clampCrop(c) {
    var a = state.analysisCanvas;
    var S = Math.max(state.gridSize, Math.min(a.width, a.height));
    c.size = Math.max(state.gridSize, Math.min(c.size, Math.min(a.width, a.height)));
    c.x = Math.max(0, Math.min(c.x, a.width - c.size));
    c.y = Math.max(0, Math.min(c.y, a.height - c.size));
    return c;
  }

  function autoCrop() {
    if (!state.analysisData || !state.analysisCanvas) return;
    var bg = state.bg;
    var box = detectContentBox(state.analysisData, state.analysisCanvas.width, state.analysisCanvas.height, bg);
    state.crop = clampCrop({ x: box.x, y: box.y, size: box.size });
    renderCropCanvas();
  }

  /* ---- 裁剪框拖拽 / 缩放 ---- */
  // 拖拽模式：move=整体移动；resize_*=拉某一角落
  var drag = null; // { mode, startPx, startPy, origX, origY, origSize }

  function hitTest(px, py) {
    var c = state.crop;
    if (!c) return null;
    var x = c.x * cropView.scale, y = c.y * cropView.scale, s = c.size * cropView.scale;
    var k = 16; // 命中区
    // 四角优先
    if (Math.abs(px - x) < k && Math.abs(py - y) < k) return 'resize_tl';
    if (Math.abs(px - (x + s)) < k && Math.abs(py - y) < k) return 'resize_tr';
    if (Math.abs(px - x) < k && Math.abs(py - (y + s)) < k) return 'resize_bl';
    if (Math.abs(px - (x + s)) < k && Math.abs(py - (y + s)) < k) return 'resize_br';
    // 框内部 → 整体移动
    if (px >= x && px <= x + s && py >= y && py <= y + s) return 'move';
    return null;
  }

  function onPointerDown(e) {
    var rect = cropCanvas.getBoundingClientRect();
    var px = e.clientX - rect.left;
    var py = e.clientY - rect.top;
    var mode = hitTest(px, py);
    if (!mode) return;
    cropCanvas.setPointerCapture(e.pointerId);
    var cp = cssPointToAnalysis(px, py);
    drag = {
      mode: mode,
      startA: cp,
      orig: { x: state.crop.x, y: state.crop.y, size: state.crop.size }
    };
    cropCanvas.classList.add(mode === 'move' ? 'is-dragging' : 'is-resizing');
  }

  function onPointerMove(e) {
    if (!drag) {
      // hover 时改鼠标样式
      var rect = cropCanvas.getBoundingClientRect();
      var mode = hitTest(e.clientX - rect.left, e.clientY - rect.top);
      if (mode && mode !== 'move') cropCanvas.classList.add('is-resizing');
      else cropCanvas.classList.remove('is-resizing');
      return;
    }
    var rect = cropCanvas.getBoundingClientRect();
    var cp = cssPointToAnalysis(e.clientX - rect.left, e.clientY - rect.top);
    var a = state.analysisCanvas;
    var S = Math.max(state.gridSize, Math.min(a.width, a.height));
    var deltaX = cp.x - drag.startA.x;
    var deltaY = cp.y - drag.startA.y;
    var orig = drag.orig;
    var c = { x: orig.x, y: orig.y, size: orig.size };

    if (drag.mode === 'move') {
      c.x = orig.x + deltaX;
      c.y = orig.y + deltaY;
      state.crop = clampCrop(c);
    } else {
      // 按拉对角的位移变化 size，保持正方形 & 左上锚点或右下锚点
      var d = Math.max(Math.abs(deltaX), Math.abs(deltaY));
      if (drag.mode === 'resize_br') {
        c.size = Math.max(S, orig.size + d);
      } else if (drag.mode === 'resize_tl') {
        // 向左上拉：size 变大、x/y 负向偏移
        c.size = Math.max(S, orig.size + d);
        var dx = Math.min(0, deltaX);
        var dy = Math.min(0, deltaY);
        c.x = orig.x + dx;
        c.y = orig.y + dy;
      } else if (drag.mode === 'resize_tr') {
        c.size = Math.max(S, orig.size + d);
        c.y = orig.y + Math.min(0, deltaY);
      } else if (drag.mode === 'resize_bl') {
        c.size = Math.max(S, orig.size + d);
        c.x = orig.x + Math.min(0, deltaX);
      }
      state.crop = clampCrop(c);
    }
    renderCropCanvas();
  }

  function onPointerUp(e) {
    if (!drag) return;
    drag = null;
    cropCanvas.classList.remove('is-dragging', 'is-resizing');
  }

  cropCanvas.addEventListener('pointerdown', onPointerDown);
  cropCanvas.addEventListener('pointermove', onPointerMove);
  cropCanvas.addEventListener('pointerup', onPointerUp);
  cropCanvas.addEventListener('pointercancel', onPointerUp);
  window.addEventListener('resize', function () { if (state.analysisCanvas && state.crop) renderCropCanvas(); });

  /* ---- 视图切换：空态 / 裁剪态 / 成品态 ---- */

  function showEmpty() {
    emptyBox.style.display = 'flex'; emptyBox.hidden = false;
    cropBox.hidden = true; cropActions.hidden = true;
    stage.hidden = true; stageMeta.hidden = true; resultActions.hidden = true;
    downloadBtn.disabled = true;
  }
  function showCrop() {
    emptyBox.hidden = true; emptyBox.style.display = 'none';
    cropBox.hidden = false; cropActions.hidden = false;
    stage.hidden = true; stageMeta.hidden = true; resultActions.hidden = true;
    downloadBtn.disabled = true;
  }
  function showResult() {
    emptyBox.hidden = true; emptyBox.style.display = 'none';
    cropBox.hidden = true; cropActions.hidden = true;
    stage.hidden = false; stageMeta.hidden = false; resultActions.hidden = false;
    downloadBtn.disabled = false;
  }

  function paint() {
    if (!state.image) { showEmpty(); return; }
    if (state.result) {
      if (state.mode === 'avatar') renderAvatar(stage, state.result);
      else renderPattern(stage, state.result);
      stageMeta.textContent = state.mode === 'avatar'
        ? '像素头像 · ' + stage.width + ' × ' + stage.height + ' · 实际用色 ' + state.result.usedColors.length + ' 种'
        : '拼豆图纸 · ' + stage.width + ' × ' + stage.height + '（含颜色对照表）· 实际用色 ' + state.result.usedColors.length + ' 种';
      showResult();
    } else {
      if (state.crop) { renderCropCanvas(); showCrop(); }
      else showEmpty();
    }
  }

  /* ---- 生成 ---- */

  function generate() {
    if (!state.image || !state.crop) return;
    state.result = computeResult(state.image, state.gridSize, state.maxColors, state.crop);
    paint();
  }

  generateBtn.addEventListener('click', generate);
  autoCropBtn.addEventListener('click', autoCrop);

  /* ---- 成品态操作 ---- */

  reCropBtn.addEventListener('click', function () {
    state.result = null;
    paint(); // paint 走 else 分支，state.crop 存在 → showCrop
  });

  function triggerDownload() {
    if (!state.result) return;
    try {
      stage.toBlob(function (blob) {
        if (!blob) { alert('保存失败，请换 Chrome 或 Edge 再试。'); return; }
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = makeFileName();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }, 'image/png');
    } catch (e) {
      alert('保存失败，请换 Chrome 或 Edge 再试。');
    }
  }

  downloadBtn2.addEventListener('click', triggerDownload);

  /* ---- 上传 ---- */

  uploadBtn.addEventListener('click', function () { fileInput.click(); });

  fileInput.addEventListener('change', function () {
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) {
      alert('这张图片打不开，换一张 JPG / PNG 试试');
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        state.image = img;
        var analysis = makeAnalysisCanvas(img);
        var W = analysis.width, H = analysis.height;
        var adata = analysis.getContext('2d').getImageData(0, 0, W, H).data;
        state.analysisCanvas = analysis;
        state.analysisData = adata;
        state.bg = detectBgColor(adata, W, H);
        var box = detectContentBox(adata, W, H, state.bg);
        state.crop = clampCrop({ x: box.x, y: box.y, size: box.size });
        state.result = null;
        uploadTitle.textContent = file.name;
        uploadSub.textContent = '点这里换一张';
        uploadBtn.classList.add('is-filled');
        paint();
      };
      img.onerror = function () { alert('读取图片失败，请再选一次。'); };
      img.src = reader.result;
    };
    reader.onerror = function () { alert('读取图片失败，请再选一次。'); };
    reader.readAsDataURL(file);
  });

  /* ---- 参数：网格尺寸 ---- */

  sizeCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var size = parseInt(card.getAttribute('data-size'), 10);
      if (size === state.gridSize) return;
      state.gridSize = size;
      sizeCards.forEach(function (c) { c.classList.toggle('is-active', c === card); });
      // 重新 clamp 裁剪框（尺寸变化可能导致 min size 或边界变化）
      if (state.crop && state.analysisCanvas) state.crop = clampCrop(state.crop);
      if (state.result) generate(); // 已有成品 → 重跑管线
      else paint();                  // 否则重渲染裁剪画布
    });
  });

  /* ---- 参数：最大颜色 ---- */

  colorChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var k = parseInt(chip.getAttribute('data-colors'), 10);
      if (k === state.maxColors) return;
      state.maxColors = k;
      colorChips.forEach(function (c) { c.classList.toggle('is-on', c === chip); });
      if (state.result) generate();
    });
  });

  /* ---- 参数：模式切换（不重算，只换渲染器） ---- */

  modeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var mode = btn.getAttribute('data-mode');
      if (mode === state.mode) return;
      state.mode = mode;
      modeBtns.forEach(function (b) { b.classList.toggle('is-on', b === btn); });
      if (state.result) paint();
    });
  });

  // ---- 下载 ----
  function makeFileName() {
    var label = state.mode === 'avatar' ? '像素头像' : '拼豆图纸';
    return label + '_' + state.gridSize + 'x' + state.gridSize + '_' + state.maxColors + '色.png';
  }

  downloadBtn.addEventListener('click', triggerDownload);

  paint();
})();
