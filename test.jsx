import React, { useState } from 'react';
import { Heading, Avatar, Box, Text, Link, Popover } from '@primer/react';
import { useUser, useAvatarDatas } from '@hooks/useUser';

export const Sidebar = ({ projectDetail }) => {
  return (
    <Box mt={-4}>
      <Description projectDetail={projectDetail} />
      <Owners projectDetail={projectDetail}/>
    </Box>
  );
};

const AvatarWithPopover = (props) => {
  const {avatar, departmentName} = props
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Avatar
        style={{ margin: "0 10px 3px 0" }}
        src={avatar.profile_img_url}
        size={35}
        onMouseOver={() => setOpen(open => !open)}
        onMouseOut={() => setOpen(open => !open)}
      />
      <Popover open={open} caret="top-right" 
        onMouseOver={() => setOpen(open => true)}
        onMouseOut={() => setOpen(open => false)}
        >
        <Popover.Content sx={{ mt: 1, ml:-195 }}>
          <Box display="flex">
            <Box>
              <Avatar
          style={{ margin: "0 10px 10px 0" }}
          src={avatar.profile_img_url}
          size={50}/>
            </Box>
            <Box>
              <b>{avatar.name} </b> 
              <p><font size="1">Site Reliability Engineer</font></p>
            </Box>
          </Box>
          <Box borderColor="border.default" borderBottomWidth={1} borderBottomStyle="solid" ></Box>
          <Text as="p" pt={2} fontSize={0}>Github ID: {avatar.github_id}</Text>
          <Text as="p" fontSize={0}>부서: {departmentName} </Text>
          <Text as="p" fontSize={0}>하는 일: </Text>
          <Text as="p" fontSize={0}>담당 프로젝트: {avatar.user_details?.managed_projects?.[0].name || "(알수없음)"}</Text>
        </Popover.Content>
      </Popover>
    </Box>
  )
}

const Description = ({ projectDetail }) => {
  const isEmptyDescription = projectDetail ? (projectDetail.description ? false : true) : true;

  return (
    <Box borderColor="border.default" borderBottomWidth={1} borderBottomStyle="solid" pb={4} mt={4}>
      <Heading sx={{ fontSize: 2, mb: 3 }}>
        Description
      </Heading>
      <Text fontSize={1}>
        {isEmptyDescription ? "Description이 없습니다." : projectDetail.description}
      </Text>
    </Box>
  );
};

const Owners = ({ projectDetail }) => {
  
  const { departments } = projectDetail;

  const departmentName = departments.slice().reverse().find(d => d.name).name
  const slackGroup = departments.slice().reverse().find(d => d.slack_user_group).slack_user_group
  const slackChannel = departments.slice().reverse().find(d => d.slack_channel).slack_channel

  const avatars = useAvatarDatas(projectDetail?.users || [])
  // console.log(avatars)
  if ( !projectDetail ) return (
    <Box borderColor="border.default" borderBottomWidth={1} borderBottomStyle="solid" pb={4} mt={4}>
      <Heading sx={{ fontSize: 2, mb: 3 }}>
        Owners
      </Heading>
      <Text fontSize={1}>
        Owners가 없습니다.
      </Text>
    </Box>
  );



  return (
    <Box borderColor="border.default" borderBottomWidth={1} borderBottomStyle="solid" pb={4} mt={4}>
      <Heading sx={{ fontSize: 2, mb: 3 }}>
        Owners
      </Heading>
      <Box sx={{ mb: 3}}>
        <Text key={departments[departments.length - 1].name} as="p">담당 팀: {departments[departments.length - 1].name}</Text>
        {slackGroup ? <Text key={slackGroup} as="p">슬랙 그룹: @{slackGroup}</Text> : null}
        {slackChannel ? <Text key={slackChannel} as="p" href="asdf">슬랙 채널: <Link href={"https://daangn.slack.com/channels/" + slackChannel}>{slackChannel}</Link></Text> : null}
      </Box>
      <Box display="flex">
        {avatars.map(o => o.user_details).join(',')}
        {avatars.map((a) => <AvatarWithPopover key={a.id} avatar={a} departmentName={departmentName}/>)}
  
      </Box>
    </Box>
  );
};
