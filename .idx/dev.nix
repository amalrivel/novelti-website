# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.bun
  ];
  # Sets environment variables in the workspace
  env = { };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "aaron-bond.better-comments"
      "aliariff.auto-add-brackets"
      "bradlc.vscode-tailwindcss"
      "christian-kohler.path-intellisense"
      "dbaeumer.vscode-eslint"
      "dsznajder.es7-react-js-snippets"
      "EditorConfig.EditorConfig"
      "esbenp.prettier-vscode"
      "formulahendry.auto-close-tag"
      "formulahendry.auto-complete-tag"
      "formulahendry.auto-rename-tag"
      "hbenl.test-adapter-converter"
      "hbenl.vscode-test-explorer"
      "mikestead.dotenv"
      "yzhang.markdown-all-in-one"
    ];
   
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "bun" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
