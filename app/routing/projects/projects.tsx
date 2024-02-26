import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGitHubRepoInfo } from "../../util/getGitHubRepoInfo";

import { LRUCache } from 'lru-cache';
import { ONE_DAY } from '../../util/timeConstants';

const cache = new LRUCache({
  max: 100_000,
  ttl: ONE_DAY
});

export const meta: MetaFunction = () => {
  return [
    { title: "projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const repos = [
    "lukeliasi/binance-dca-bot",
    "lukeliasi/lukeliasi.com",
    "lukeliasi/database-backups-s3"
  ];

  const repoData: Record<string, any> = {};

  for (const repo of repos) {
    let data = cache.get(repo);
    if (!data) {
      data = await getGitHubRepoInfo(repo);
      cache.set(repo, data);
    }

    repoData[repo] = data;
  }

  return repoData;
};

export default function About() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <p className="legal">dude</p>
      <h1>Welcome to pro!</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
