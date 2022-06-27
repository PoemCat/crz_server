module.exports = {
  apps: [
    {
      script: "index.js",
      watch: "./src",
      name: "crz_server", //名称
      script: "src/app.js", //程序入口
      cwd: "./", //根目录
      exec_mode: "cluster", //启动模式
      instances: 1,
      error_file: "./logs/error.log", //错误输出日志
      out_file: "./logs/out.log", //日志
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
