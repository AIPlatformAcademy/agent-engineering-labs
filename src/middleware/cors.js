const allowedHostnames = new Set([
  'localhost',
  '127.0.0.1',
  '::1'
]);

function isDevelopmentOrigin(origin) {
  try {
    const url = new URL(origin);
    const isLocalhost = (
      ['http:', 'https:'].includes(url.protocol) &&
      allowedHostnames.has(url.hostname)
    );
    const isVsCodeWebview = (
      url.protocol === 'vscode-webview:' ||
      (
        url.protocol === 'https:' &&
        url.hostname.endsWith('.vscode-webview.net')
      )
    );

    return isLocalhost || isVsCodeWebview;
  } catch {
    return false;
  }
}

export function developmentCors(req, res, next) {
  const origin = req.get('origin');

  if (
    process.env.NODE_ENV !== 'development' ||
    !origin ||
    !isDevelopmentOrigin(origin)
  ) {
    return next();
  }

  res.set('Access-Control-Allow-Origin', origin);
  res.vary('Origin');
  res.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Request-Id'
  );

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
}