/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("repository.created", async (context) => {

    const team_name = "team_name"

    context.octokit.teams.addOrUpdateRepoPermissionsInOrg({
      org: "github",
      team_slug: team_name + "_admin",
      repo: repo.name,
      permission: "admin"
    });

    context.octokit.teams.addOrUpdateRepoPermissionsInOrg({
      org: "github",
      team_slug: team_name + "_read",
      repo: repo.name,
      permission: "pull"
    });

    context.octokit.teams.addOrUpdateRepoPermissionsInOrg({
      org: "github",
      team_slug: team_name + "_write",
      repo: repo.name,
      permission: "push"
    });
  });

  // Sample action 
  // app.on("issues.opened", async (context) => {
  //   const issueComment = context.issue({
  //     body: "Thanks for opening this issue!",
  //   });
  //   return context.octokit.issues.createComment(issueComment);
  // });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};